import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShellWithSidebarOnFullAccent(){
    registerComponent(App, {
        name: "ShellWithSidebarOnFullAccent",
        importPath: "./components/chakra/chakraPro/Aplication/Page Shells/ShellWithSidebarOnFullAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 