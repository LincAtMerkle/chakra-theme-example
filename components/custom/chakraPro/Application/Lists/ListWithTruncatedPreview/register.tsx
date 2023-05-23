import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerListWithTruncatedPreview(){
    registerComponent(App, {
        name: "ListWithTruncatedPreview",
        importPath: "./components/custom/chakraPro/Aplication/Lists/ListWithTruncatedPreview",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 