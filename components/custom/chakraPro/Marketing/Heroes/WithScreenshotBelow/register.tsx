import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerWithScreenshotBelow(){
    registerComponent(App, {
        name: "WithScreenshotBelow",
        importPath: "./components/chakra/chakraPro/Marketing/Footers/WithScreenshotBelow",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 