import { SwatchFontWeights } from "./SwatchFontWeights";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchFontWeights() {
  registerComponent(SwatchFontWeights, {
    name: "SwatchFontWeights",
    importPath: "./components/custom/tokenSheets/SwatchFontWeights",
    props: {
      opacity: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
