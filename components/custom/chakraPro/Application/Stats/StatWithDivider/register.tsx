import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatWithDivider(){
    registerComponent(App, {
        name: "StatWithDivider",
        importPath: "./components/chakra/chakraPro/Aplication/Stats/StatWithDivider",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 