// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: 92NigGtu2F

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
import { StepsWithLine } from "../../custom/chakraPro/Aplication/Progress Steps/StepsWithLine"; // plasmic-import: wTv1kTgRjPP/codeComponent
import { StepsWithDots } from "../../custom/chakraPro/Aplication/Progress Steps/StepsWithDots"; // plasmic-import: mBxuPVHD_U6/codeComponent
import { StepsWithCirclesAndText } from "../../custom/chakraPro/Aplication/Progress Steps/StepsWithCirclesAndText"; // plasmic-import: su1uDug1Bon/codeComponent
import { StepsWithCircles } from "../../custom/chakraPro/Aplication/Progress Steps/StepsWithCircles"; // plasmic-import: NPhTI6__mr9/codeComponent
import { StepsInVerticalOrientation } from "../../custom/chakraPro/Aplication/Progress Steps/StepsInVerticalOrientation"; // plasmic-import: SZJQYryAOeX/codeComponent
import { StepsWithAccent } from "../../custom/chakraPro/Aplication/Progress Steps/StepsWithAccent"; // plasmic-import: 7D1aK9oI2KG/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicProgressSteps.module.css"; // plasmic-import: 92NigGtu2F/css

export type PlasmicProgressSteps__VariantMembers = {};
export type PlasmicProgressSteps__VariantsArgs = {};
type VariantPropType = keyof PlasmicProgressSteps__VariantsArgs;
export const PlasmicProgressSteps__VariantProps = new Array<VariantPropType>();

export type PlasmicProgressSteps__ArgsType = {};
type ArgPropType = keyof PlasmicProgressSteps__ArgsType;
export const PlasmicProgressSteps__ArgProps = new Array<ArgPropType>();

export type PlasmicProgressSteps__OverridesType = {
  root?: p.Flex<"div">;
  stepsWithLine?: p.Flex<typeof StepsWithLine>;
  stepsWithDots?: p.Flex<typeof StepsWithDots>;
  stepsWithCirclesAndText?: p.Flex<typeof StepsWithCirclesAndText>;
  stepsWithCircles?: p.Flex<typeof StepsWithCircles>;
  stepsInVerticalOrientation?: p.Flex<typeof StepsInVerticalOrientation>;
  stepsWithAccent?: p.Flex<typeof StepsWithAccent>;
};

export interface DefaultProgressStepsProps {}

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

function PlasmicProgressSteps__RenderFunc(props: {
  variants: PlasmicProgressSteps__VariantsArgs;
  args: PlasmicProgressSteps__ArgsType;
  overrides: PlasmicProgressSteps__OverridesType;
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
            className={classNames("__wab_instance", sty.chakraUiHeading__f8Y9)}
            noOfLines={1 as const}
            size={"4xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7Xvnj
              )}
            >
              {"Progress Steps"}
            </div>
          </Heading>
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__uzMI)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0Ihzo
              )}
            >
              {"Steps with line"}
            </div>
          </Heading>
          <StepsWithLine
            data-plasmic-name={"stepsWithLine"}
            data-plasmic-override={overrides.stepsWithLine}
            className={classNames("__wab_instance", sty.stepsWithLine)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__vq2EQ)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9Gert
              )}
            >
              {"Steps with dots"}
            </div>
          </Heading>
          <StepsWithDots
            data-plasmic-name={"stepsWithDots"}
            data-plasmic-override={overrides.stepsWithDots}
            className={classNames("__wab_instance", sty.stepsWithDots)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__g76Ie)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1CuZj
              )}
            >
              {"Steps with circles and text"}
            </div>
          </Heading>
          <StepsWithCirclesAndText
            data-plasmic-name={"stepsWithCirclesAndText"}
            data-plasmic-override={overrides.stepsWithCirclesAndText}
            className={classNames(
              "__wab_instance",
              sty.stepsWithCirclesAndText
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__kkEx1)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ix4Zc
              )}
            >
              {"Steps with circles"}
            </div>
          </Heading>
          <StepsWithCircles
            data-plasmic-name={"stepsWithCircles"}
            data-plasmic-override={overrides.stepsWithCircles}
            className={classNames("__wab_instance", sty.stepsWithCircles)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__juTgT)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__daSdn
              )}
            >
              {"Steps in vertical orientation"}
            </div>
          </Heading>
          <StepsInVerticalOrientation
            data-plasmic-name={"stepsInVerticalOrientation"}
            data-plasmic-override={overrides.stepsInVerticalOrientation}
            className={classNames(
              "__wab_instance",
              sty.stepsInVerticalOrientation
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__bkFR)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__heraO
              )}
            >
              {"Steps with accent"}
            </div>
          </Heading>
          <StepsWithAccent
            data-plasmic-name={"stepsWithAccent"}
            data-plasmic-override={overrides.stepsWithAccent}
            className={classNames("__wab_instance", sty.stepsWithAccent)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "stepsWithLine",
    "stepsWithDots",
    "stepsWithCirclesAndText",
    "stepsWithCircles",
    "stepsInVerticalOrientation",
    "stepsWithAccent"
  ],
  stepsWithLine: ["stepsWithLine"],
  stepsWithDots: ["stepsWithDots"],
  stepsWithCirclesAndText: ["stepsWithCirclesAndText"],
  stepsWithCircles: ["stepsWithCircles"],
  stepsInVerticalOrientation: ["stepsInVerticalOrientation"],
  stepsWithAccent: ["stepsWithAccent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  stepsWithLine: typeof StepsWithLine;
  stepsWithDots: typeof StepsWithDots;
  stepsWithCirclesAndText: typeof StepsWithCirclesAndText;
  stepsWithCircles: typeof StepsWithCircles;
  stepsInVerticalOrientation: typeof StepsInVerticalOrientation;
  stepsWithAccent: typeof StepsWithAccent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProgressSteps__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProgressSteps__VariantsArgs;
    args?: PlasmicProgressSteps__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProgressSteps__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProgressSteps__ArgsType,
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
          internalArgPropNames: PlasmicProgressSteps__ArgProps,
          internalVariantPropNames: PlasmicProgressSteps__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProgressSteps__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProgressSteps";
  } else {
    func.displayName = `PlasmicProgressSteps.${nodeName}`;
  }
  return func;
}

export const PlasmicProgressSteps = Object.assign(
  // Top-level PlasmicProgressSteps renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    stepsWithLine: makeNodeComponent("stepsWithLine"),
    stepsWithDots: makeNodeComponent("stepsWithDots"),
    stepsWithCirclesAndText: makeNodeComponent("stepsWithCirclesAndText"),
    stepsWithCircles: makeNodeComponent("stepsWithCircles"),
    stepsInVerticalOrientation: makeNodeComponent("stepsInVerticalOrientation"),
    stepsWithAccent: makeNodeComponent("stepsWithAccent"),

    // Metadata about props expected for PlasmicProgressSteps
    internalVariantProps: PlasmicProgressSteps__VariantProps,
    internalArgProps: PlasmicProgressSteps__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProgressSteps;
/* prettier-ignore-end */