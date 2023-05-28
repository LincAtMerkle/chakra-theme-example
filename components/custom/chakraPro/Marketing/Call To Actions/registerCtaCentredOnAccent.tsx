import { App }  from "./CtaCentredOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerCtaCentredOnAccent(){
    registerComponent(App, {
        name: "CtaCentredOnAccent",
        importPath: "./components/custom/chakraPro/Marketing/Call To Actions/registerCtaCentredOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 