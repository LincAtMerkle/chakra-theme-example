import { SwatchSizing } from "./SwatchSizing";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchSizing() {
  registerComponent(SwatchSizing, {
    name: "SwatchSizing",
    importPath: "./components/custom/tokenSheets/SwatchSizing",
    props: {
      size: {
        type: "string",
        defaultValue: "80px",
      },
    },
  });
}
