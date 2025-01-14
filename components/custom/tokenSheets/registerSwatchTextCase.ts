import { SwatchTextCase } from "./SwatchTextCase";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchTextCase() {
  registerComponent(SwatchTextCase, {
    name: "SwatchTextCase",
    importPath: "./components/custom/tokenSheets/SwatchTextCase",
    props: {
      textCase: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
