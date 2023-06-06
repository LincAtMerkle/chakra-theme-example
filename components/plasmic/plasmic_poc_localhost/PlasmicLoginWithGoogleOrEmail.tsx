// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: 1difr1CYPa

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
import { LoginWithGoogleOrEmail } from "../../custom/chakraPro/Application/Authentication/LoginWithGoogleOrEmail"; // plasmic-import: o9rnxGtWcA/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicLoginWithGoogleOrEmail.module.css"; // plasmic-import: 1difr1CYPa/css

export type PlasmicLoginWithGoogleOrEmail__VariantMembers = {};
export type PlasmicLoginWithGoogleOrEmail__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoginWithGoogleOrEmail__VariantsArgs;
export const PlasmicLoginWithGoogleOrEmail__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLoginWithGoogleOrEmail__ArgsType = {};
type ArgPropType = keyof PlasmicLoginWithGoogleOrEmail__ArgsType;
export const PlasmicLoginWithGoogleOrEmail__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginWithGoogleOrEmail__OverridesType = {
  root?: p.Flex<"div">;
  loginWithGoogleOrEmail?: p.Flex<typeof LoginWithGoogleOrEmail>;
};

export interface DefaultLoginWithGoogleOrEmailProps {
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

function PlasmicLoginWithGoogleOrEmail__RenderFunc(props: {
  variants: PlasmicLoginWithGoogleOrEmail__VariantsArgs;
  args: PlasmicLoginWithGoogleOrEmail__ArgsType;
  overrides: PlasmicLoginWithGoogleOrEmail__OverridesType;
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
      <LoginWithGoogleOrEmail
        data-plasmic-name={"loginWithGoogleOrEmail"}
        data-plasmic-override={overrides.loginWithGoogleOrEmail}
        className={classNames("__wab_instance", sty.loginWithGoogleOrEmail)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loginWithGoogleOrEmail"],
  loginWithGoogleOrEmail: ["loginWithGoogleOrEmail"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  loginWithGoogleOrEmail: typeof LoginWithGoogleOrEmail;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginWithGoogleOrEmail__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginWithGoogleOrEmail__VariantsArgs;
    args?: PlasmicLoginWithGoogleOrEmail__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoginWithGoogleOrEmail__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoginWithGoogleOrEmail__ArgsType,
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
          internalArgPropNames: PlasmicLoginWithGoogleOrEmail__ArgProps,
          internalVariantPropNames: PlasmicLoginWithGoogleOrEmail__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginWithGoogleOrEmail__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginWithGoogleOrEmail";
  } else {
    func.displayName = `PlasmicLoginWithGoogleOrEmail.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginWithGoogleOrEmail = Object.assign(
  // Top-level PlasmicLoginWithGoogleOrEmail renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginWithGoogleOrEmail: makeNodeComponent("loginWithGoogleOrEmail"),

    // Metadata about props expected for PlasmicLoginWithGoogleOrEmail
    internalVariantProps: PlasmicLoginWithGoogleOrEmail__VariantProps,
    internalArgProps: PlasmicLoginWithGoogleOrEmail__ArgProps
  }
);

export default PlasmicLoginWithGoogleOrEmail;
/* prettier-ignore-end */