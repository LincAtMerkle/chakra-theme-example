import { App }  from "./ShowcaseOnBackgroundImage";
import {registerComponent } from "@plasmicapp/host";

export function registerShowcaseOnBackgroundImage(){
    registerComponent(App, {
        name: "ShowcaseOnBackgroundImage",
        importPath: "./components/chakra/chakraPro/E-Commerce/Category Showcases/registerShowcaseOnBackgroundImage",        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 