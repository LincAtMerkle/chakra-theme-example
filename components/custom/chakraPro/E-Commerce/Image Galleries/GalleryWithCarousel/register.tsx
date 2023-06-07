import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerGalleryWithCarousel(){
    registerComponent(App, {
        name: "GalleryWithCarousel",
        importPath: "./components/chakra/chakraPro/GalleryWithCarousel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 