// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: rvitCPzm3y

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
import { CtaCentred } from "../../custom/chakraPro/Marketing/Call To Actions/registerCtaCentred"; // plasmic-import: mQyjfLZqxaMl/codeComponent
import { CtaWithImage } from "../../custom/chakraPro/Marketing/Call To Actions/registerCtaWithImage"; // plasmic-import: ltNywUmOdf83/codeComponent
import { CtaBoxed } from "../../custom/chakraPro/Marketing/Call To Actions/registerCtaBoxed"; // plasmic-import: oRTvhb0BfUJG/codeComponent
import { CtaBoxedOnAccent } from "../../custom/chakraPro/Marketing/Call To Actions/registerCtaBoxedOnAccent"; // plasmic-import: xceITVg6ZyzE/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicCallToActions.module.css"; // plasmic-import: rvitCPzm3y/css

export type PlasmicCallToActions__VariantMembers = {};
export type PlasmicCallToActions__VariantsArgs = {};
type VariantPropType = keyof PlasmicCallToActions__VariantsArgs;
export const PlasmicCallToActions__VariantProps = new Array<VariantPropType>();

export type PlasmicCallToActions__ArgsType = {};
type ArgPropType = keyof PlasmicCallToActions__ArgsType;
export const PlasmicCallToActions__ArgProps = new Array<ArgPropType>();

export type PlasmicCallToActions__OverridesType = {
  root?: p.Flex<"div">;
  ctaCentred?: p.Flex<typeof CtaCentred>;
  ctaWithImage?: p.Flex<typeof CtaWithImage>;
  ctaBoxed?: p.Flex<typeof CtaBoxed>;
};

export interface DefaultCallToActionsProps {}

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

function PlasmicCallToActions__RenderFunc(props: {
  variants: PlasmicCallToActions__VariantsArgs;
  args: PlasmicCallToActions__ArgsType;
  overrides: PlasmicCallToActions__OverridesType;
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
            className={classNames("__wab_instance", sty.chakraUiHeading__cuXi9)}
            noOfLines={1 as const}
            size={"4xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gw3Dg
              )}
            >
              {"Call To Actions"}
            </div>
          </Heading>
          <Heading
            className={classNames(
              "__wab_instance",
              sty.chakraUiHeading___0PeW8
            )}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qeHqh
              )}
            >
              {"Cta centred"}
            </div>
          </Heading>
          <CtaCentred
            data-plasmic-name={"ctaCentred"}
            data-plasmic-override={overrides.ctaCentred}
            className={classNames("__wab_instance", sty.ctaCentred)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__bd164)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yGm8E
              )}
            >
              {"Cta with image"}
            </div>
          </Heading>
          <CtaWithImage
            data-plasmic-name={"ctaWithImage"}
            data-plasmic-override={overrides.ctaWithImage}
            className={classNames("__wab_instance", sty.ctaWithImage)}
          />

          <Heading
            className={classNames(
              "__wab_instance",
              sty.chakraUiHeading___7LAbs
            )}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tdDrv
              )}
            >
              {"Cta boxed"}
            </div>
          </Heading>
          <CtaBoxed
            data-plasmic-name={"ctaBoxed"}
            data-plasmic-override={overrides.ctaBoxed}
            className={classNames("__wab_instance", sty.ctaBoxed)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__aKhvL)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bCFuf
              )}
            >
              {"Cta boxed on accent"}
            </div>
          </Heading>
          <CtaBoxedOnAccent
            className={classNames(
              "__wab_instance",
              sty.ctaBoxedOnAccent__xmh24
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__svJx8)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ueyRe
              )}
            >
              {"Cta centred on accent"}
            </div>
          </Heading>
          <CtaBoxedOnAccent
            className={classNames(
              "__wab_instance",
              sty.ctaBoxedOnAccent__zvcX8
            )}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "ctaCentred", "ctaWithImage", "ctaBoxed"],
  ctaCentred: ["ctaCentred"],
  ctaWithImage: ["ctaWithImage"],
  ctaBoxed: ["ctaBoxed"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  ctaCentred: typeof CtaCentred;
  ctaWithImage: typeof CtaWithImage;
  ctaBoxed: typeof CtaBoxed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCallToActions__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCallToActions__VariantsArgs;
    args?: PlasmicCallToActions__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCallToActions__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCallToActions__ArgsType,
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
          internalArgPropNames: PlasmicCallToActions__ArgProps,
          internalVariantPropNames: PlasmicCallToActions__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCallToActions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCallToActions";
  } else {
    func.displayName = `PlasmicCallToActions.${nodeName}`;
  }
  return func;
}

export const PlasmicCallToActions = Object.assign(
  // Top-level PlasmicCallToActions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    ctaCentred: makeNodeComponent("ctaCentred"),
    ctaWithImage: makeNodeComponent("ctaWithImage"),
    ctaBoxed: makeNodeComponent("ctaBoxed"),

    // Metadata about props expected for PlasmicCallToActions
    internalVariantProps: PlasmicCallToActions__VariantProps,
    internalArgProps: PlasmicCallToActions__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCallToActions;
/* prettier-ignore-end */
