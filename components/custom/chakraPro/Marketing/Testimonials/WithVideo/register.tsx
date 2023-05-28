import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerWithVideo(){
    registerComponent(App, {
        name: "WithVideo",
        importPath: "./components/custom/chakraPro/Marketing/Team/WithVideo",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 