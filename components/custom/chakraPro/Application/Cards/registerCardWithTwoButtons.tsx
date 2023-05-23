import { App }  from "./CardWithTwoButtons";
import {registerComponent } from "@plasmicapp/host";

export function registerCardWithTwoButtons(){
    registerComponent(App, {
        name: "CardWithTwoButtons",
        importPath: "./components/custom/chakraPro/Application/Cards/CardWithTwoButtons",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 