import { ProductFeaturesTable }  from "./ProductFeaturesTable";
import {registerComponent } from "@plasmicapp/host";

export function registerProductFeaturesTable(){
    registerComponent(ProductFeaturesTable, {
        name: "ProductFeaturesTable",
        importPath: "./components/custom/chakraPro/Application/Banner/ProductFeaturesTable",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 