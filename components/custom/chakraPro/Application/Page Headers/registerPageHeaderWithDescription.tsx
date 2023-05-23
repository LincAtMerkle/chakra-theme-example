import { App }  from "./PageHeaderWithDescription";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderWithDescription(){
    registerComponent(App, {
        name: "PageHeaderWithDescription",
        importPath: "./components/custom/chakraPro/Aplication/Page Headers/Cards/PageHeaderWithDescription",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 