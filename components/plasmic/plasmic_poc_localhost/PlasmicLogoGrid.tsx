// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: e4H4Q-200G

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { Heading } from "@chakra-ui/react"; // plasmic-import: 0G7l8BbhtHSG-/codeComponent
import { LogoGridBoxed } from "../../custom/chakraPro/Marketing/Logo Grid/LogoGridBoxed"; // plasmic-import: R9SHV1pGyW6y/codeComponent
import { LogoGridBoxedOnAccent } from "../../custom/chakraPro/Marketing/Logo Grid/LogoGridBoxedOnAccent"; // plasmic-import: RzT6WvHslnC2/codeComponent
import { LogoGridWithTitle } from "../../custom/chakraPro/Marketing/Logo Grid/LogoGridWithTitle"; // plasmic-import: 2kPBF8Dgbk1g/codeComponent
import { LogoGridWithTiles } from "../../custom/chakraPro/Marketing/Logo Grid/LogoGridWithTiles"; // plasmic-import: 08_Oy1Xq-zvL/codeComponent
import { LogoGridWithTitleOnAccent } from "../../custom/chakraPro/Marketing/Logo Grid/LogoGridWithTitleOnAccent"; // plasmic-import: tB1nOAt_47Xk/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicLogoGrid.module.css"; // plasmic-import: e4H4Q-200G/css

export type PlasmicLogoGrid__VariantMembers = {};
export type PlasmicLogoGrid__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogoGrid__VariantsArgs;
export const PlasmicLogoGrid__VariantProps = new Array<VariantPropType>();

export type PlasmicLogoGrid__ArgsType = {};
type ArgPropType = keyof PlasmicLogoGrid__ArgsType;
export const PlasmicLogoGrid__ArgProps = new Array<ArgPropType>();

export type PlasmicLogoGrid__OverridesType = {
  root?: p.Flex<"div">;
  logoGridBoxed?: p.Flex<typeof LogoGridBoxed>;
  logoGridBoxedOnAccent?: p.Flex<typeof LogoGridBoxedOnAccent>;
  logoGridWithTitle?: p.Flex<typeof LogoGridWithTitle>;
  logoGridWithTiles?: p.Flex<typeof LogoGridWithTiles>;
  logoGridWithTitleOnAccent?: p.Flex<typeof LogoGridWithTitleOnAccent>;
};

export interface DefaultLogoGridProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLogoGrid__RenderFunc(props: {
  variants: PlasmicLogoGrid__VariantsArgs;
  args: PlasmicLogoGrid__ArgsType;
  overrides: PlasmicLogoGrid__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__pOSdU)}
            noOfLines={1 as const}
            size={"4xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oimH8
              )}
            >
              {"Logo Grid"}
            </div>
          </Heading>
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__nz7At)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4A1P6
              )}
            >
              {"Logo grid boxed"}
            </div>
          </Heading>
          <LogoGridBoxed
            data-plasmic-name={"logoGridBoxed"}
            data-plasmic-override={overrides.logoGridBoxed}
            className={classNames("__wab_instance", sty.logoGridBoxed)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__sFdR)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__m33Yn
              )}
            >
              {"Logo grid boxed on accent"}
            </div>
          </Heading>
          <LogoGridBoxedOnAccent
            data-plasmic-name={"logoGridBoxedOnAccent"}
            data-plasmic-override={overrides.logoGridBoxedOnAccent}
            className={classNames("__wab_instance", sty.logoGridBoxedOnAccent)}
          />

          <Heading
            className={classNames(
              "__wab_instance",
              sty.chakraUiHeading___63On0
            )}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__imXsj
              )}
            >
              {"Logo grid with title"}
            </div>
          </Heading>
          <LogoGridWithTitle
            data-plasmic-name={"logoGridWithTitle"}
            data-plasmic-override={overrides.logoGridWithTitle}
            className={classNames("__wab_instance", sty.logoGridWithTitle)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__n9Khm)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vYfI5
              )}
            >
              {"Logo grid with tiles"}
            </div>
          </Heading>
          <LogoGridWithTiles
            data-plasmic-name={"logoGridWithTiles"}
            data-plasmic-override={overrides.logoGridWithTiles}
            className={classNames("__wab_instance", sty.logoGridWithTiles)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__sFk9R)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3N1Mn
              )}
            >
              {"Logo grid with title on accent"}
            </div>
          </Heading>
          <LogoGridWithTitleOnAccent
            data-plasmic-name={"logoGridWithTitleOnAccent"}
            data-plasmic-override={overrides.logoGridWithTitleOnAccent}
            className={classNames(
              "__wab_instance",
              sty.logoGridWithTitleOnAccent
            )}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "logoGridBoxed",
    "logoGridBoxedOnAccent",
    "logoGridWithTitle",
    "logoGridWithTiles",
    "logoGridWithTitleOnAccent"
  ],
  logoGridBoxed: ["logoGridBoxed"],
  logoGridBoxedOnAccent: ["logoGridBoxedOnAccent"],
  logoGridWithTitle: ["logoGridWithTitle"],
  logoGridWithTiles: ["logoGridWithTiles"],
  logoGridWithTitleOnAccent: ["logoGridWithTitleOnAccent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  logoGridBoxed: typeof LogoGridBoxed;
  logoGridBoxedOnAccent: typeof LogoGridBoxedOnAccent;
  logoGridWithTitle: typeof LogoGridWithTitle;
  logoGridWithTiles: typeof LogoGridWithTiles;
  logoGridWithTitleOnAccent: typeof LogoGridWithTitleOnAccent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogoGrid__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogoGrid__VariantsArgs;
    args?: PlasmicLogoGrid__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogoGrid__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLogoGrid__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLogoGrid__ArgProps,
          internalVariantPropNames: PlasmicLogoGrid__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogoGrid__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogoGrid";
  } else {
    func.displayName = `PlasmicLogoGrid.${nodeName}`;
  }
  return func;
}

export const PlasmicLogoGrid = Object.assign(
  // Top-level PlasmicLogoGrid renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logoGridBoxed: makeNodeComponent("logoGridBoxed"),
    logoGridBoxedOnAccent: makeNodeComponent("logoGridBoxedOnAccent"),
    logoGridWithTitle: makeNodeComponent("logoGridWithTitle"),
    logoGridWithTiles: makeNodeComponent("logoGridWithTiles"),
    logoGridWithTitleOnAccent: makeNodeComponent("logoGridWithTitleOnAccent"),

    // Metadata about props expected for PlasmicLogoGrid
    internalVariantProps: PlasmicLogoGrid__VariantProps,
    internalArgProps: PlasmicLogoGrid__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLogoGrid;
/* prettier-ignore-end */
