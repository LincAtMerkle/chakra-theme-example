// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x7VZoMTkaRPxy26VUXVkvK

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { ChakraProvider } from "@chakra-ui/react"; // plasmic-import: W7daNWrClxD/codeComponent
// import {   } from "@plasmicpkgs/antd5/skinny/registerConfigProvider"; // plasmic-import: ixWyRxIJ6ze/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  chakraProviderProps?: Partial<
    Omit<React.ComponentProps<typeof ChakraProvider>, "children">
  >;

  // antdConfigProviderProps?: Partial<
  //   Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  // >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, chakraProviderProps, antdConfigProviderProps } = props;

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
      {/* <AntdConfigProvider
                        {...antdConfigProviderProps}
                        borderRadius={
                          antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
                            ? antdConfigProviderProps.borderRadius!
                            : (6 as const)
                        }
                        colorBgBase={
                          antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
                            ? antdConfigProviderProps.colorBgBase!
                            : ("#ffffff" as const)
                        }
                        colorError={
                          antdConfigProviderProps && "colorError" in antdConfigProviderProps
                            ? antdConfigProviderProps.colorError!
                            : ("#ff4d4f" as const)
                        }
                        colorInfo={
                          antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
                            ? antdConfigProviderProps.colorInfo!
                            : ("#1677ff" as const)
                        }
                        colorPrimary={
                          antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
                            ? antdConfigProviderProps.colorPrimary!
                            : ("#1677ff" as const)
                        }
                        colorSuccess={
                          antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
                            ? antdConfigProviderProps.colorSuccess!
                            : ("#52c41a" as const)
                        }
                        colorWarning={
                          antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
                            ? antdConfigProviderProps.colorWarning!
                            : ("#faad14" as const)
                        }
                        controlHeight={
                          antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
                            ? antdConfigProviderProps.controlHeight!
                            : (32 as const)
                        }
                        lineWidth={
                          antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
                            ? antdConfigProviderProps.lineWidth!
                            : (1 as const)
                        }
                        sizeStep={
                          antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
                            ? antdConfigProviderProps.sizeStep!
                            : (4 as const)
                        }
                        sizeUnit={
                          antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
                            ? antdConfigProviderProps.sizeUnit!
                            : (4 as const)
                        }
                        spacing={
                          antdConfigProviderProps && "spacing" in antdConfigProviderProps
                            ? antdConfigProviderProps.spacing!
                            : undefined
                        }
                        themeStyles={
                          antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
                            ? antdConfigProviderProps.themeStyles!
                            : true
                            ? {
                                fontFamily: "Inter",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "1.5",
                                color: "#535353",
                                letterSpacing: "normal"
                              }
                            : undefined
                        }
                        wireframe={
                          antdConfigProviderProps && "wireframe" in antdConfigProviderProps
                            ? antdConfigProviderProps.wireframe!
                            : false
                        }
                       >
                        {children}
                       </AntdConfigProvider> */}
    </ChakraProvider>
  );
}
