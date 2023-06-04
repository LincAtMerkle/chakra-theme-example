// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: HlyNRSHZIx

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
import { DividerWithWithText } from "../../custom/chakraPro/Application/Dividers/DividerWithWithText"; // plasmic-import: gxYT05JYPNG/codeComponent
import { DividerWithRadioButtonGroup } from "../../custom/chakraPro/Application/Dividers/DividerWithRadioButtonGroup"; // plasmic-import: CnBh0l6AB6s/codeComponent
import { DividerWithIconButtonGroup } from "../../custom/chakraPro/Application/Dividers/DividerWithIconButtonGroup"; // plasmic-import: FZCaBCd3Hc8/codeComponent
import { DividerWithButton } from "../../custom/chakraPro/Application/Dividers/DividerWithButton"; // plasmic-import: Zqlhr7RDN25/codeComponent
import { DividerWithIconButton } from "../../custom/chakraPro/Application/Dividers/DividerWithIconButton"; // plasmic-import: luUkGA2KfFn/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicDividers.module.css"; // plasmic-import: HlyNRSHZIx/css

export type PlasmicDividers__VariantMembers = {};
export type PlasmicDividers__VariantsArgs = {};
type VariantPropType = keyof PlasmicDividers__VariantsArgs;
export const PlasmicDividers__VariantProps = new Array<VariantPropType>();

export type PlasmicDividers__ArgsType = {};
type ArgPropType = keyof PlasmicDividers__ArgsType;
export const PlasmicDividers__ArgProps = new Array<ArgPropType>();

export type PlasmicDividers__OverridesType = {
  root?: p.Flex<"div">;
  dividerWithWithText?: p.Flex<typeof DividerWithWithText>;
  dividerWithRadioButtonGroup?: p.Flex<typeof DividerWithRadioButtonGroup>;
  dividerWithIconButtonGroup?: p.Flex<typeof DividerWithIconButtonGroup>;
  dividerWithButton?: p.Flex<typeof DividerWithButton>;
  dividerWithIconButton?: p.Flex<typeof DividerWithIconButton>;
};

export interface DefaultDividersProps {}

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

function PlasmicDividers__RenderFunc(props: {
  variants: PlasmicDividers__VariantsArgs;
  args: PlasmicDividers__ArgsType;
  overrides: PlasmicDividers__OverridesType;
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
          <DividerWithWithText
            data-plasmic-name={"dividerWithWithText"}
            data-plasmic-override={overrides.dividerWithWithText}
            className={classNames("__wab_instance", sty.dividerWithWithText)}
          />

          <DividerWithRadioButtonGroup
            data-plasmic-name={"dividerWithRadioButtonGroup"}
            data-plasmic-override={overrides.dividerWithRadioButtonGroup}
            className={classNames(
              "__wab_instance",
              sty.dividerWithRadioButtonGroup
            )}
          />

          <DividerWithIconButtonGroup
            data-plasmic-name={"dividerWithIconButtonGroup"}
            data-plasmic-override={overrides.dividerWithIconButtonGroup}
            className={classNames(
              "__wab_instance",
              sty.dividerWithIconButtonGroup
            )}
          />

          <DividerWithButton
            data-plasmic-name={"dividerWithButton"}
            data-plasmic-override={overrides.dividerWithButton}
            className={classNames("__wab_instance", sty.dividerWithButton)}
          />

          <DividerWithIconButton
            data-plasmic-name={"dividerWithIconButton"}
            data-plasmic-override={overrides.dividerWithIconButton}
            className={classNames("__wab_instance", sty.dividerWithIconButton)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "dividerWithWithText",
    "dividerWithRadioButtonGroup",
    "dividerWithIconButtonGroup",
    "dividerWithButton",
    "dividerWithIconButton"
  ],
  dividerWithWithText: ["dividerWithWithText"],
  dividerWithRadioButtonGroup: ["dividerWithRadioButtonGroup"],
  dividerWithIconButtonGroup: ["dividerWithIconButtonGroup"],
  dividerWithButton: ["dividerWithButton"],
  dividerWithIconButton: ["dividerWithIconButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  dividerWithWithText: typeof DividerWithWithText;
  dividerWithRadioButtonGroup: typeof DividerWithRadioButtonGroup;
  dividerWithIconButtonGroup: typeof DividerWithIconButtonGroup;
  dividerWithButton: typeof DividerWithButton;
  dividerWithIconButton: typeof DividerWithIconButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDividers__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDividers__VariantsArgs;
    args?: PlasmicDividers__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDividers__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDividers__ArgsType,
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
          internalArgPropNames: PlasmicDividers__ArgProps,
          internalVariantPropNames: PlasmicDividers__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDividers__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDividers";
  } else {
    func.displayName = `PlasmicDividers.${nodeName}`;
  }
  return func;
}

export const PlasmicDividers = Object.assign(
  // Top-level PlasmicDividers renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dividerWithWithText: makeNodeComponent("dividerWithWithText"),
    dividerWithRadioButtonGroup: makeNodeComponent(
      "dividerWithRadioButtonGroup"
    ),
    dividerWithIconButtonGroup: makeNodeComponent("dividerWithIconButtonGroup"),
    dividerWithButton: makeNodeComponent("dividerWithButton"),
    dividerWithIconButton: makeNodeComponent("dividerWithIconButton"),

    // Metadata about props expected for PlasmicDividers
    internalVariantProps: PlasmicDividers__VariantProps,
    internalArgProps: PlasmicDividers__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDividers;
/* prettier-ignore-end */
