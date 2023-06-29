const StyleDictionary = require("style-dictionary");
const {
    registerTransforms,
    transforms,
  } = require("@tokens-studio/sd-transforms");

const { promises } = require("node:fs");

registerTransforms(StyleDictionary);

StyleDictionary.registerTransformGroup({
    name: "custom/tokens-studio",
    transforms: [...transforms, "attribute/cti", "name/cti/kebab"],
  });

const tokenFilter = (cat) => (token) => token.attributes.category === cat;

const generateFilesArr = (tokensCategories, theme) => {
    return tokensCategories.map((cat) => ({
      filter: tokenFilter(cat),
      destination: `./src/components/${cat}/tokens/${cat}-${theme.toLowerCase()}.tokens`,
      format: "css/variables",
      options: {
        selector: ":host",
        fileHeader: "autoGeneratedFileHeader",
      },
    }));
  };

async function run() {
    const $themes = JSON.parse(await promises.readFile("./src/tokens/$themes.json"));
    const configs = $themes.map((theme) => ({
        source: Object.entries(theme.selectedTokenSets)
          .filter(([, val]) => val !== "disabled")
          .map(([tokenset]) => `./src/tokens/${tokenset}.json`),
        fileHeader: {
          autoGeneratedFileHeader: () => {
            return [`Do not edit directly, this file was auto-generated`];
          },
        },
        platforms: {
          css: {
            transformGroup: "custom/tokens-studio",
            files: generateFilesArr([
              "avatar",
              "badge",
              "button",
              "checkbox",
              "close-button",
              "container",
              "custom-select",
              "divider",
              "form-label",
              "heading",
              "iconButton",
              "input",
              "link",
              "popover",
              "progress",
              "radio-card",
              "switch",
              "table",
              "tabs",
              "tag",
              "text",
              "textarea",
              "tooltip"
            ], theme.name),
          },
        },
      }));
    configs.forEach((cfg) => {
        const sd = StyleDictionary.extend(cfg);
        sd.cleanAllPlatforms();
        sd.buildAllPlatforms();
      });
}

run();