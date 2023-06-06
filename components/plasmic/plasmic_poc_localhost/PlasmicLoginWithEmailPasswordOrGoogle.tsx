// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: a7h--ySjoI

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
import { LoginWithEmailPasswordOrGoogle } from "../../custom/chakraPro/Application/Authentication/LoginWithEmailPasswordOrGoogle"; // plasmic-import: 9KUsxtSBku/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicLoginWithEmailPasswordOrGoogle.module.css"; // plasmic-import: a7h--ySjoI/css

export type PlasmicLoginWithEmailPasswordOrGoogle__VariantMembers = {};
export type PlasmicLoginWithEmailPasswordOrGoogle__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicLoginWithEmailPasswordOrGoogle__VariantsArgs;
export const PlasmicLoginWithEmailPasswordOrGoogle__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLoginWithEmailPasswordOrGoogle__ArgsType = {};
type ArgPropType = keyof PlasmicLoginWithEmailPasswordOrGoogle__ArgsType;
export const PlasmicLoginWithEmailPasswordOrGoogle__ArgProps =
  new Array<ArgPropType>();

export type PlasmicLoginWithEmailPasswordOrGoogle__OverridesType = {
  root?: p.Flex<"div">;
  loginWithEmailPasswordOrGoogle?: p.Flex<
    typeof LoginWithEmailPasswordOrGoogle
  >;
};

export interface DefaultLoginWithEmailPasswordOrGoogleProps {
  className?: string;
}

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

function PlasmicLoginWithEmailPasswordOrGoogle__RenderFunc(props: {
  variants: PlasmicLoginWithEmailPasswordOrGoogle__VariantsArgs;
  args: PlasmicLoginWithEmailPasswordOrGoogle__ArgsType;
  overrides: PlasmicLoginWithEmailPasswordOrGoogle__OverridesType;
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
      <LoginWithEmailPasswordOrGoogle
        data-plasmic-name={"loginWithEmailPasswordOrGoogle"}
        data-plasmic-override={overrides.loginWithEmailPasswordOrGoogle}
        className={classNames(
          "__wab_instance",
          sty.loginWithEmailPasswordOrGoogle
        )}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loginWithEmailPasswordOrGoogle"],
  loginWithEmailPasswordOrGoogle: ["loginWithEmailPasswordOrGoogle"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  loginWithEmailPasswordOrGoogle: typeof LoginWithEmailPasswordOrGoogle;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginWithEmailPasswordOrGoogle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginWithEmailPasswordOrGoogle__VariantsArgs;
    args?: PlasmicLoginWithEmailPasswordOrGoogle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicLoginWithEmailPasswordOrGoogle__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicLoginWithEmailPasswordOrGoogle__ArgsType,
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
          internalArgPropNames: PlasmicLoginWithEmailPasswordOrGoogle__ArgProps,
          internalVariantPropNames:
            PlasmicLoginWithEmailPasswordOrGoogle__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginWithEmailPasswordOrGoogle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginWithEmailPasswordOrGoogle";
  } else {
    func.displayName = `PlasmicLoginWithEmailPasswordOrGoogle.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginWithEmailPasswordOrGoogle = Object.assign(
  // Top-level PlasmicLoginWithEmailPasswordOrGoogle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginWithEmailPasswordOrGoogle: makeNodeComponent(
      "loginWithEmailPasswordOrGoogle"
    ),

    // Metadata about props expected for PlasmicLoginWithEmailPasswordOrGoogle
    internalVariantProps: PlasmicLoginWithEmailPasswordOrGoogle__VariantProps,
    internalArgProps: PlasmicLoginWithEmailPasswordOrGoogle__ArgProps
  }
);

export default PlasmicLoginWithEmailPasswordOrGoogle;
/* prettier-ignore-end */