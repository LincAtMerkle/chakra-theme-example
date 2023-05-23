import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerRadioCardGroup(){
    registerComponent(App, {
        name: "RadioCardGroup",
        importPath: "./components/custom/chakraPro/Aplication/Form Elements/RadioCardGroup",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 