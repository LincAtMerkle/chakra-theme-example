// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: 8Zp0x_bfAd

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
import { FiltersWithSidebar } from "../../custom/chakraPro/FiltersWithSidebar"; // plasmic-import: kMimoCQZ2hcH/codeComponent
import { FiltersWithDropdown } from "../../custom/chakraPro/FiltersWithDropdown"; // plasmic-import: HDZhLBr1iNDX/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicProductFilters.module.css"; // plasmic-import: 8Zp0x_bfAd/css

export type PlasmicProductFilters__VariantMembers = {};
export type PlasmicProductFilters__VariantsArgs = {};
type VariantPropType = keyof PlasmicProductFilters__VariantsArgs;
export const PlasmicProductFilters__VariantProps = new Array<VariantPropType>();

export type PlasmicProductFilters__ArgsType = {};
type ArgPropType = keyof PlasmicProductFilters__ArgsType;
export const PlasmicProductFilters__ArgProps = new Array<ArgPropType>();

export type PlasmicProductFilters__OverridesType = {
  root?: p.Flex<"div">;
  filtersWithSidebar?: p.Flex<typeof FiltersWithSidebar>;
  filtersWithDropdown?: p.Flex<typeof FiltersWithDropdown>;
};

export interface DefaultProductFiltersProps {}

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

function PlasmicProductFilters__RenderFunc(props: {
  variants: PlasmicProductFilters__VariantsArgs;
  args: PlasmicProductFilters__ArgsType;
  overrides: PlasmicProductFilters__OverridesType;
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
            className={classNames("__wab_instance", sty.chakraUiHeading__yiemk)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uWWg
              )}
            >
              {"Filters with sidebar"}
            </div>
          </Heading>
          <FiltersWithSidebar
            data-plasmic-name={"filtersWithSidebar"}
            data-plasmic-override={overrides.filtersWithSidebar}
            className={classNames("__wab_instance", sty.filtersWithSidebar)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__s6TnD)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qvfQy
              )}
            >
              {"Filters with dropdown"}
            </div>
          </Heading>
          <FiltersWithDropdown
            data-plasmic-name={"filtersWithDropdown"}
            data-plasmic-override={overrides.filtersWithDropdown}
            className={classNames("__wab_instance", sty.filtersWithDropdown)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "filtersWithSidebar", "filtersWithDropdown"],
  filtersWithSidebar: ["filtersWithSidebar"],
  filtersWithDropdown: ["filtersWithDropdown"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  filtersWithSidebar: typeof FiltersWithSidebar;
  filtersWithDropdown: typeof FiltersWithDropdown;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductFilters__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductFilters__VariantsArgs;
    args?: PlasmicProductFilters__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductFilters__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductFilters__ArgsType,
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
          internalArgPropNames: PlasmicProductFilters__ArgProps,
          internalVariantPropNames: PlasmicProductFilters__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductFilters__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductFilters";
  } else {
    func.displayName = `PlasmicProductFilters.${nodeName}`;
  }
  return func;
}

export const PlasmicProductFilters = Object.assign(
  // Top-level PlasmicProductFilters renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    filtersWithSidebar: makeNodeComponent("filtersWithSidebar"),
    filtersWithDropdown: makeNodeComponent("filtersWithDropdown"),

    // Metadata about props expected for PlasmicProductFilters
    internalVariantProps: PlasmicProductFilters__VariantProps,
    internalArgProps: PlasmicProductFilters__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProductFilters;
/* prettier-ignore-end */
