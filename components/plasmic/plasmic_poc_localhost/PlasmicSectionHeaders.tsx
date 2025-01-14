// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: pLcGz6JEAx

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
import { SectionHeaderWithTabs } from "../../custom/chakraPro/Aplication/Section Headers/SectionHeaderWithTabs"; // plasmic-import: eKTfa2c-Vct/codeComponent
import { SectionHeaderWithTitle } from "../../custom/chakraPro/Aplication/Section Headers/SectionHeaderWithTitle"; // plasmic-import: NHsEVGztu2g/codeComponent
import { SectionHeaderWithTwoButtons } from "../../custom/chakraPro/Aplication/Section Headers/SectionHeaderWithTwoButtons"; // plasmic-import: LhlvbK-dUmc/codeComponent
import { SectionHeaderWithDescription } from "../../custom/chakraPro/Aplication/Section Headers/SectionHeaderWithDescription"; // plasmic-import: 4js_YZwJpXu/codeComponent
import { SectionHeaderWithButton } from "../../custom/chakraPro/Aplication/Section Headers/SectionHeaderWithButton"; // plasmic-import: v1-P0ytc4yX/codeComponent
import { SectionHeaderWithFilterButtonGroup } from "../../custom/chakraPro/Aplication/Section Headers/SectionHeaderWithFilterButtonGroup"; // plasmic-import: 4_l0XyPy6Dc/codeComponent
import { SectionHeaderWithSearch } from "../../custom/chakraPro/Aplication/Section Headers/SectionHeaderWithSearch"; // plasmic-import: jrg6dBOCc3C/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicSectionHeaders.module.css"; // plasmic-import: pLcGz6JEAx/css

export type PlasmicSectionHeaders__VariantMembers = {};
export type PlasmicSectionHeaders__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionHeaders__VariantsArgs;
export const PlasmicSectionHeaders__VariantProps = new Array<VariantPropType>();

export type PlasmicSectionHeaders__ArgsType = {};
type ArgPropType = keyof PlasmicSectionHeaders__ArgsType;
export const PlasmicSectionHeaders__ArgProps = new Array<ArgPropType>();

export type PlasmicSectionHeaders__OverridesType = {
  root?: p.Flex<"div">;
  sectionHeaderWithTabs?: p.Flex<typeof SectionHeaderWithTabs>;
  sectionHeaderWithTitle?: p.Flex<typeof SectionHeaderWithTitle>;
  sectionHeaderWithTwoButtons?: p.Flex<typeof SectionHeaderWithTwoButtons>;
  sectionHeaderWithDescription?: p.Flex<typeof SectionHeaderWithDescription>;
  sectionHeaderWithButton?: p.Flex<typeof SectionHeaderWithButton>;
  sectionHeaderWithFilterButtonGroup?: p.Flex<
    typeof SectionHeaderWithFilterButtonGroup
  >;
  sectionHeaderWithSearch?: p.Flex<typeof SectionHeaderWithSearch>;
};

export interface DefaultSectionHeadersProps {}

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

function PlasmicSectionHeaders__RenderFunc(props: {
  variants: PlasmicSectionHeaders__VariantsArgs;
  args: PlasmicSectionHeaders__ArgsType;
  overrides: PlasmicSectionHeaders__OverridesType;
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
            className={classNames("__wab_instance", sty.chakraUiHeading__iT7IM)}
            noOfLines={1 as const}
            size={"4xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zmxq1
              )}
            >
              {"Section Headers"}
            </div>
          </Heading>
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__w967U)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hOd48
              )}
            >
              {"Section header with tabs"}
            </div>
          </Heading>
          <SectionHeaderWithTabs
            data-plasmic-name={"sectionHeaderWithTabs"}
            data-plasmic-override={overrides.sectionHeaderWithTabs}
            className={classNames("__wab_instance", sty.sectionHeaderWithTabs)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__qCWyC)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aUxG5
              )}
            >
              {"Section header with title"}
            </div>
          </Heading>
          <SectionHeaderWithTitle
            data-plasmic-name={"sectionHeaderWithTitle"}
            data-plasmic-override={overrides.sectionHeaderWithTitle}
            className={classNames("__wab_instance", sty.sectionHeaderWithTitle)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__d2BWy)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bse5Z
              )}
            >
              {"Section header with two buttons"}
            </div>
          </Heading>
          <SectionHeaderWithTwoButtons
            data-plasmic-name={"sectionHeaderWithTwoButtons"}
            data-plasmic-override={overrides.sectionHeaderWithTwoButtons}
            className={classNames(
              "__wab_instance",
              sty.sectionHeaderWithTwoButtons
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__ntqNz)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rp7FI
              )}
            >
              {"Section header with description"}
            </div>
          </Heading>
          <SectionHeaderWithDescription
            data-plasmic-name={"sectionHeaderWithDescription"}
            data-plasmic-override={overrides.sectionHeaderWithDescription}
            className={classNames(
              "__wab_instance",
              sty.sectionHeaderWithDescription
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading___59Jp)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__my7Us
              )}
            >
              {"Section header with button"}
            </div>
          </Heading>
          <SectionHeaderWithButton
            data-plasmic-name={"sectionHeaderWithButton"}
            data-plasmic-override={overrides.sectionHeaderWithButton}
            className={classNames(
              "__wab_instance",
              sty.sectionHeaderWithButton
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__hYuat)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wsryi
              )}
            >
              {"Section header with filter button group"}
            </div>
          </Heading>
          <SectionHeaderWithFilterButtonGroup
            data-plasmic-name={"sectionHeaderWithFilterButtonGroup"}
            data-plasmic-override={overrides.sectionHeaderWithFilterButtonGroup}
            className={classNames(
              "__wab_instance",
              sty.sectionHeaderWithFilterButtonGroup
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__boUj4)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zCayv
              )}
            >
              {"Section header with search"}
            </div>
          </Heading>
          <SectionHeaderWithSearch
            data-plasmic-name={"sectionHeaderWithSearch"}
            data-plasmic-override={overrides.sectionHeaderWithSearch}
            className={classNames(
              "__wab_instance",
              sty.sectionHeaderWithSearch
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
    "sectionHeaderWithTabs",
    "sectionHeaderWithTitle",
    "sectionHeaderWithTwoButtons",
    "sectionHeaderWithDescription",
    "sectionHeaderWithButton",
    "sectionHeaderWithFilterButtonGroup",
    "sectionHeaderWithSearch"
  ],
  sectionHeaderWithTabs: ["sectionHeaderWithTabs"],
  sectionHeaderWithTitle: ["sectionHeaderWithTitle"],
  sectionHeaderWithTwoButtons: ["sectionHeaderWithTwoButtons"],
  sectionHeaderWithDescription: ["sectionHeaderWithDescription"],
  sectionHeaderWithButton: ["sectionHeaderWithButton"],
  sectionHeaderWithFilterButtonGroup: ["sectionHeaderWithFilterButtonGroup"],
  sectionHeaderWithSearch: ["sectionHeaderWithSearch"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionHeaderWithTabs: typeof SectionHeaderWithTabs;
  sectionHeaderWithTitle: typeof SectionHeaderWithTitle;
  sectionHeaderWithTwoButtons: typeof SectionHeaderWithTwoButtons;
  sectionHeaderWithDescription: typeof SectionHeaderWithDescription;
  sectionHeaderWithButton: typeof SectionHeaderWithButton;
  sectionHeaderWithFilterButtonGroup: typeof SectionHeaderWithFilterButtonGroup;
  sectionHeaderWithSearch: typeof SectionHeaderWithSearch;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionHeaders__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionHeaders__VariantsArgs;
    args?: PlasmicSectionHeaders__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionHeaders__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSectionHeaders__ArgsType,
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
          internalArgPropNames: PlasmicSectionHeaders__ArgProps,
          internalVariantPropNames: PlasmicSectionHeaders__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSectionHeaders__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionHeaders";
  } else {
    func.displayName = `PlasmicSectionHeaders.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionHeaders = Object.assign(
  // Top-level PlasmicSectionHeaders renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionHeaderWithTabs: makeNodeComponent("sectionHeaderWithTabs"),
    sectionHeaderWithTitle: makeNodeComponent("sectionHeaderWithTitle"),
    sectionHeaderWithTwoButtons: makeNodeComponent(
      "sectionHeaderWithTwoButtons"
    ),
    sectionHeaderWithDescription: makeNodeComponent(
      "sectionHeaderWithDescription"
    ),
    sectionHeaderWithButton: makeNodeComponent("sectionHeaderWithButton"),
    sectionHeaderWithFilterButtonGroup: makeNodeComponent(
      "sectionHeaderWithFilterButtonGroup"
    ),
    sectionHeaderWithSearch: makeNodeComponent("sectionHeaderWithSearch"),

    // Metadata about props expected for PlasmicSectionHeaders
    internalVariantProps: PlasmicSectionHeaders__VariantProps,
    internalArgProps: PlasmicSectionHeaders__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSectionHeaders;
/* prettier-ignore-end */
