import { App }  from "./CtaBoxedOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerCtaBoxedOnAccent(){
    registerComponent(App, {
        name: "CtaBoxedOnAccent",
        importPath: "./components/custom/chakraPro/Marketing/Call To Actions/registerCtaBoxedOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 