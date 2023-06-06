import { App }  from "./NewsletterFormWithImage";
import {registerComponent } from "@plasmicapp/host";

export function registerNewsletterFormWithImage(){
    registerComponent(App, {
        name: "NewsletterFormWithImage",
        importPath: "./components/custom/chakraPro/Marketing/Newsletters/NewsletterFormWithImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 