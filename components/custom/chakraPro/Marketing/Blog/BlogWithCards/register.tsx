import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerBlogWithCards(){
    registerComponent(App, {
        name: "BlogWithCards",
        importPath: "./components/chakra/chakraPro/Marketing/Blog/BlogWithCards",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 