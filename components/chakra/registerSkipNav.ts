import { SkipNavProps } from "@chakra-ui/react";

import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const skipNavMeta: CodeComponentMeta<SkipNavProps> = {
  ...getComponentNameAndImportMeta("SkipNav"),
  props: {
    size: {
      type: "choice",
      options: ["", "", ""],
      defaultValue: "",
    },
    variant: {
      type: "choice",
      options: ["", "", ""],
      defaultValue: "",
    },

    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "SkipNav",
      },
    },
  },
};