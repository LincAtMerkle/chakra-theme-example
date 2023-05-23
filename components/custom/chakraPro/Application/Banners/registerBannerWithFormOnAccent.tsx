import { App }  from "./BannerWithFormOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithFormOnAccent(){
    registerComponent(App, {
        name: "BannerWithFormOnAccent",
        importPath: "./components/custom/chakraPro/Application/Banner/BannerWithFormOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 