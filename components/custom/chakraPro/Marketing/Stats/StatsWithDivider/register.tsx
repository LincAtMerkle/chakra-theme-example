import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatsWithDivider(){
    registerComponent(App, {
        name: "StatsWithDivider",
        importPath: "./components/chakra/chakraPro/Marketing/Stats/StatsWithDivider",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 