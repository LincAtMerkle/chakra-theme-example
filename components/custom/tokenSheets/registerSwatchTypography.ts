import { SwatchTypography } from "./SwatchTypography";
import { registerComponent } from '@plasmicapp/react-web/lib/host';

export function registerSwatchTypography() {
  registerComponent(SwatchTypography, {
    name: "SwatchTypography",
    importPath: "./components/custom/tokenSheets/SwatchTypography",
    props: {
      typography: {
        type: "string",
        defaultValue: "16px",
      },
    },
  });
}
