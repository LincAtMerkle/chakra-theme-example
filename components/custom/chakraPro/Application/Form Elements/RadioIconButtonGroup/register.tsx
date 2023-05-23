import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerRadioIconButtonGroup(){
    registerComponent(App, {
        name: "RadioIconButtonGroup",
        importPath: "./components/custom/chakraPro/Aplication/Form Elements/RadioIconButtonGroup",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 