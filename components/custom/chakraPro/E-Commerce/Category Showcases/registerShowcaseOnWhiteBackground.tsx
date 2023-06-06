import { App }  from "./ShowcaseOnWhiteBackground";
import {registerComponent } from "@plasmicapp/host";

export function registerShowcaseOnWhiteBackground(){
    registerComponent(App, {
        name: "ShowcaseOnWhiteBackground",
        importPath: "./components/custom/chakraPro/E-Commerce/Category Showcases/registerShowcaseOnWhiteBackground",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 