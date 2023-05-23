// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { ChakraProvider } from "@chakra-ui/react"; // plasmic-import: 0ke_GqR_1yrk8q/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  chakraProviderProps?: Partial<
    Omit<React.ComponentProps<typeof ChakraProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, chakraProviderProps } = props;

  return (
    <ChakraProvider
      {...chakraProviderProps}
      myToken1={
        chakraProviderProps && "myToken1" in chakraProviderProps
          ? chakraProviderProps.myToken1!
          : ("#FF0000" as const)
      }
      myToken2={
        chakraProviderProps && "myToken2" in chakraProviderProps
          ? chakraProviderProps.myToken2!
          : ("#00FF00" as const)
      }
      myToken3={
        chakraProviderProps && "myToken3" in chakraProviderProps
          ? chakraProviderProps.myToken3!
          : ("#0000FF" as const)
      }
    >
      {children}
    </ChakraProvider>
  );
}