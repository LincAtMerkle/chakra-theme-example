import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithCentredForm(){
    registerComponent(App, {
        name: "LoginWithCentredForm",
        importPath: "./components/custom/chakraPro/Aplication/Page Shells/LoginWithCentredForm",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 