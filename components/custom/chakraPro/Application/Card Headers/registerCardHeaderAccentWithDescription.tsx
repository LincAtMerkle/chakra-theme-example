import { App }  from "./CardHeaderAccentWithDescription";
import {registerComponent } from "@plasmicapp/host";

export function registerCardHeaderAccentWithDescription(){
    registerComponent(App, {
        name: "CardHeaderAccentWithDescription",
        importPath: "./components/custom/chakraPro/Card Headers/CardHeaderAccentWithDescription",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 