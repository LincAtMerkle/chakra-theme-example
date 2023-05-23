import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithCentredForm(){
    registerComponent(App, {
        name: "LoginWithCentredForm",
        importPath: "./components/custom/chakraPro/Application/Dividers/DividerWithRadioButtonGroup",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 