import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFeatureWithThreeColumnsCentred(){
    registerComponent(App, {
        name: "FeatureWithThreeColumnsCentred",
        importPath: "./components/chakra/chakraPro/Marketing/Features/FeatureWithThreeColumnsCentred",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 