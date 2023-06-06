import { App }  from "./TwoColumnWithImage";
import {registerComponent } from "@plasmicapp/host";

export function registerTwoColumnWithImage(){
    registerComponent(App, {
        name: "TwoColumnWithImage",
        importPath: "./components/custom/chakraPro/Marketing/Heroes/TwoColumnWithImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 