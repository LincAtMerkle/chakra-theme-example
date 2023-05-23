import { App }  from "./CardHeaderAccentWithButton";
import {registerComponent } from "@plasmicapp/host";

export function registerCardHeaderAccentWithButton(){
    registerComponent(App, {
        name: "CardHeaderAccentWithButton",
        importPath: "./components/custom/chakraPro/Card Headers/CardHeaderAccentWithButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 