import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerWithFlushedCards(){
    registerComponent(App, {
        name: "WithFlushedCards",
        importPath: "./components/chakra/chakraPro/Marketing/Pricing/WithFlushedCards",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 