import { App }  from "./PageHeaderWithSearch";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderWithSearch(){
    registerComponent(App, {
        name: "PageHeaderWithSearch",
        importPath: "./components/chakra/chakraPro/Aplication/Page Headers/Cards/PageHeaderWithSearch",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 