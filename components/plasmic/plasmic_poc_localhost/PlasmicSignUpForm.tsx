// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: zWkrj4koeA

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
import { SignUpForm } from "../../custom/chakraPro/Application/Authentication/SignUpForm"; // plasmic-import: Ut7HbuGN0AN/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicSignUpForm.module.css"; // plasmic-import: zWkrj4koeA/css

export type PlasmicSignUpForm__VariantMembers = {};
export type PlasmicSignUpForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUpForm__VariantsArgs;
export const PlasmicSignUpForm__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUpForm__ArgsType = {};
type ArgPropType = keyof PlasmicSignUpForm__ArgsType;
export const PlasmicSignUpForm__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUpForm__OverridesType = {
  root?: p.Flex<"div">;
  signUpForm?: p.Flex<typeof SignUpForm>;
};

export interface DefaultSignUpFormProps {
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

function PlasmicSignUpForm__RenderFunc(props: {
  variants: PlasmicSignUpForm__VariantsArgs;
  args: PlasmicSignUpForm__ArgsType;
  overrides: PlasmicSignUpForm__OverridesType;
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
      <SignUpForm
        data-plasmic-name={"signUpForm"}
        data-plasmic-override={overrides.signUpForm}
        className={classNames("__wab_instance", sty.signUpForm)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "signUpForm"],
  signUpForm: ["signUpForm"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  signUpForm: typeof SignUpForm;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUpForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUpForm__VariantsArgs;
    args?: PlasmicSignUpForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUpForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignUpForm__ArgsType,
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
          internalArgPropNames: PlasmicSignUpForm__ArgProps,
          internalVariantPropNames: PlasmicSignUpForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignUpForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUpForm";
  } else {
    func.displayName = `PlasmicSignUpForm.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUpForm = Object.assign(
  // Top-level PlasmicSignUpForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    signUpForm: makeNodeComponent("signUpForm"),

    // Metadata about props expected for PlasmicSignUpForm
    internalVariantProps: PlasmicSignUpForm__VariantProps,
    internalArgProps: PlasmicSignUpForm__ArgProps
  }
);

export default PlasmicSignUpForm;
/* prettier-ignore-end */
