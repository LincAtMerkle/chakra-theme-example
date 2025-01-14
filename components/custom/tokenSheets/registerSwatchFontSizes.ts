import { SwatchFontSizes } from "./SwatchFontSizes";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchFontSizes() {
  registerComponent(SwatchFontSizes, {
    name: "SwatchFontSizes",
    importPath: "./components/custom/tokenSheets/SwatchFontSizes",
    props: {
      opacity: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
