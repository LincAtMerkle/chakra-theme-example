// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x7VZoMTkaRPxy26VUXVkvK
// Component: QyqHsDAu6Z
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
// import { ColorComponent } from "../../../ColorComponent"; // plasmic-import: us5TRabAx7/codeComponent
import { ColorComponent } from "../../custom/tokenSheets/ColorComponent.tsx"; // plasmic-import: us5TRabAx7/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc.module.css"; // plasmic-import: x7VZoMTkaRPxy26VUXVkvK/projectcss
import sty from "./PlasmicDesignTokenItem.module.css"; // plasmic-import: QyqHsDAu6Z/css

export type PlasmicDesignTokenItem__VariantMembers = {};
export type PlasmicDesignTokenItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicDesignTokenItem__VariantsArgs;
export const PlasmicDesignTokenItem__VariantProps =
  new Array<VariantPropType>();

export type PlasmicDesignTokenItem__ArgsType = {
  color?: string;
  colorSwatch?: string;
  colorSwatch2?: string;
  colorComponent?: string;
};
type ArgPropType = keyof PlasmicDesignTokenItem__ArgsType;
export const PlasmicDesignTokenItem__ArgProps = new Array<ArgPropType>(
  "color",
  "colorSwatch",
  "colorSwatch2",
  "colorComponent"
);

export type PlasmicDesignTokenItem__OverridesType = {
  root?: p.Flex<"div">;
  tokenName?: p.Flex<"div">;
  textValue?: p.Flex<"div">;
  description?: p.Flex<"div">;
  color?: p.Flex<typeof ColorComponent>;
};

export interface DefaultDesignTokenItemProps {
  color?: string;
  colorSwatch?: string;
  colorSwatch2?: string;
  colorComponent?: string;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicDesignTokenItem__RenderFunc(props: {
  variants: PlasmicDesignTokenItem__VariantsArgs;
  args: PlasmicDesignTokenItem__ArgsType;
  overrides: PlasmicDesignTokenItem__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          color: "blue" as const,
          colorSwatch2: "red" as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
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
      <div
        data-plasmic-name={"tokenName"}
        data-plasmic-override={overrides.tokenName}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.tokenName
        )}
      >
        {"tokenName"}
      </div>

      <div
        data-plasmic-name={"textValue"}
        data-plasmic-override={overrides.textValue}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.textValue
        )}
      >
        {"textValue"}
      </div>

      <div
        data-plasmic-name={"description"}
        data-plasmic-override={overrides.description}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.description
        )}
      >
        {"description"}
      </div>

      <ColorComponent
        data-plasmic-name={"color"}
        data-plasmic-override={overrides.color}
        className={classNames("__wab_instance", sty.color)}
        color={args.color}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "tokenName", "textValue", "description", "color"],
  tokenName: ["tokenName"],
  textValue: ["textValue"],
  description: ["description"],
  color: ["color"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  tokenName: "div";
  textValue: "div";
  description: "div";
  color: typeof ColorComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDesignTokenItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDesignTokenItem__VariantsArgs;
    args?: PlasmicDesignTokenItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDesignTokenItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDesignTokenItem__ArgsType,
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
          internalArgPropNames: PlasmicDesignTokenItem__ArgProps,
          internalVariantPropNames: PlasmicDesignTokenItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDesignTokenItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDesignTokenItem";
  } else {
    func.displayName = `PlasmicDesignTokenItem.${nodeName}`;
  }
  return func;
}

export const PlasmicDesignTokenItem = Object.assign(
  // Top-level PlasmicDesignTokenItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tokenName: makeNodeComponent("tokenName"),
    textValue: makeNodeComponent("textValue"),
    description: makeNodeComponent("description"),
    color: makeNodeComponent("color"),

    // Metadata about props expected for PlasmicDesignTokenItem
    internalVariantProps: PlasmicDesignTokenItem__VariantProps,
    internalArgProps: PlasmicDesignTokenItem__ArgProps
  }
);

export default PlasmicDesignTokenItem;
/* prettier-ignore-end */
