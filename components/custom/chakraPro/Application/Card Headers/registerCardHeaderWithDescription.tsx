import { App }  from "./CardHeaderWithDescription";
import {registerComponent } from "@plasmicapp/host";

export function registerCardHeaderWithDescription(){
    registerComponent(App, {
        name: "CardHeaderWithDescription",
        importPath: "./components/chakra/chakraPro/Card Headers/CardHeaderWithDescription",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 