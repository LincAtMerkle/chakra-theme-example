// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: 4b4ebod5rn

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
import { SizePicker } from "../../custom/chakraPro/SizePicker"; // plasmic-import: DSxhkoU6X4AG/codeComponent
import { ColorPicker } from "../../custom/chakraPro/ColorPicker"; // plasmic-import: APC4Okib0Opk/codeComponent
import { QuantityPicker } from "../../custom/chakraPro/QuantityPicker"; // plasmic-import: q86GdRSFB7cI/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicProductPickers.module.css"; // plasmic-import: 4b4ebod5rn/css

export type PlasmicProductPickers__VariantMembers = {};
export type PlasmicProductPickers__VariantsArgs = {};
type VariantPropType = keyof PlasmicProductPickers__VariantsArgs;
export const PlasmicProductPickers__VariantProps = new Array<VariantPropType>();

export type PlasmicProductPickers__ArgsType = {};
type ArgPropType = keyof PlasmicProductPickers__ArgsType;
export const PlasmicProductPickers__ArgProps = new Array<ArgPropType>();

export type PlasmicProductPickers__OverridesType = {
  root?: p.Flex<"div">;
  sizePicker?: p.Flex<typeof SizePicker>;
  colorPicker?: p.Flex<typeof ColorPicker>;
  quantityPicker?: p.Flex<typeof QuantityPicker>;
};

export interface DefaultProductPickersProps {}

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

function PlasmicProductPickers__RenderFunc(props: {
  variants: PlasmicProductPickers__VariantsArgs;
  args: PlasmicProductPickers__ArgsType;
  overrides: PlasmicProductPickers__OverridesType;
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
            className={classNames("__wab_instance", sty.chakraUiHeading__eUemr)}
            noOfLines={1 as const}
            size={"4xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__f9RKu
              )}
            >
              {"Product Pickers"}
            </div>
          </Heading>
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__ogvgE)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9GODe
              )}
            >
              {"Size picker"}
            </div>
          </Heading>
          <SizePicker
            data-plasmic-name={"sizePicker"}
            data-plasmic-override={overrides.sizePicker}
            className={classNames("__wab_instance", sty.sizePicker)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__fsm4F)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dYZe
              )}
            >
              {"Color picker"}
            </div>
          </Heading>
          <ColorPicker
            data-plasmic-name={"colorPicker"}
            data-plasmic-override={overrides.colorPicker}
            className={classNames("__wab_instance", sty.colorPicker)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__bVVcQ)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ryVts
              )}
            >
              {"Quantity picker"}
            </div>
          </Heading>
          <QuantityPicker
            data-plasmic-name={"quantityPicker"}
            data-plasmic-override={overrides.quantityPicker}
            className={classNames("__wab_instance", sty.quantityPicker)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sizePicker", "colorPicker", "quantityPicker"],
  sizePicker: ["sizePicker"],
  colorPicker: ["colorPicker"],
  quantityPicker: ["quantityPicker"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sizePicker: typeof SizePicker;
  colorPicker: typeof ColorPicker;
  quantityPicker: typeof QuantityPicker;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductPickers__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductPickers__VariantsArgs;
    args?: PlasmicProductPickers__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductPickers__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductPickers__ArgsType,
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
          internalArgPropNames: PlasmicProductPickers__ArgProps,
          internalVariantPropNames: PlasmicProductPickers__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductPickers__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductPickers";
  } else {
    func.displayName = `PlasmicProductPickers.${nodeName}`;
  }
  return func;
}

export const PlasmicProductPickers = Object.assign(
  // Top-level PlasmicProductPickers renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sizePicker: makeNodeComponent("sizePicker"),
    colorPicker: makeNodeComponent("colorPicker"),
    quantityPicker: makeNodeComponent("quantityPicker"),

    // Metadata about props expected for PlasmicProductPickers
    internalVariantProps: PlasmicProductPickers__VariantProps,
    internalArgProps: PlasmicProductPickers__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProductPickers;
/* prettier-ignore-end */