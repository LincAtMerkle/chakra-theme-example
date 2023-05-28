import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatWithCta(){
    registerComponent(App, {
        name: "StatWithCta",
        importPath: "./components/custom/chakraPro/Aplication/Stats/StatWithCta",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 