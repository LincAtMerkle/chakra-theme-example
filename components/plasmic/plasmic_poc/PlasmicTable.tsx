// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x7VZoMTkaRPxy26VUXVkvK
// Component: B74XSlye7u

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
import { TableContainer } from "@chakra-ui/react"; // plasmic-import: r5qTF8OqBje/codeComponent
import { Table } from "@chakra-ui/react"; // plasmic-import: pRkQp7fqyd0/codeComponent
import { Thead } from "@chakra-ui/react"; // plasmic-import: 5cF48hjbv9R/codeComponent
import { Tr } from "@chakra-ui/react"; // plasmic-import: VjgLRcINltj/codeComponent
import { Th } from "@chakra-ui/react"; // plasmic-import: RkBFzjINZ5m/codeComponent
import { Tbody } from "@chakra-ui/react"; // plasmic-import: fIi-uuqvK_x/codeComponent
import { Td } from "@chakra-ui/react"; // plasmic-import: XsEGpi-BtZQ/codeComponent
import { TableCaption } from "@chakra-ui/react"; // plasmic-import: 93FT4nnXQKZ/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc.module.css"; // plasmic-import: x7VZoMTkaRPxy26VUXVkvK/projectcss
import sty from "./PlasmicTable.module.css"; // plasmic-import: B74XSlye7u/css

export type PlasmicTable__VariantMembers = {};
export type PlasmicTable__VariantsArgs = {};
type VariantPropType = keyof PlasmicTable__VariantsArgs;
export const PlasmicTable__VariantProps = new Array<VariantPropType>();

export type PlasmicTable__ArgsType = {};
type ArgPropType = keyof PlasmicTable__ArgsType;
export const PlasmicTable__ArgProps = new Array<ArgPropType>();

export type PlasmicTable__OverridesType = {
  root?: p.Flex<"div">;
  chakraUiTableContainer?: p.Flex<typeof TableContainer>;
  chakraUiThead?: p.Flex<typeof Thead>;
  chakraUiTbody?: p.Flex<typeof Tbody>;
  chakraUiTableCaption?: p.Flex<typeof TableCaption>;
};

export interface DefaultTableProps {}

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

function PlasmicTable__RenderFunc(props: {
  variants: PlasmicTable__VariantsArgs;
  args: PlasmicTable__ArgsType;
  overrides: PlasmicTable__OverridesType;
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
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <TableContainer
            data-plasmic-name={"chakraUiTableContainer"}
            data-plasmic-override={overrides.chakraUiTableContainer}
            className={classNames("__wab_instance", sty.chakraUiTableContainer)}
          >
            <Table
              className={classNames("__wab_instance", sty.chakraUiTable__aj3Xj)}
              colorScheme={"gray" as const}
              size={"md" as const}
              variant={"simple" as const}
            >
              <Thead
                data-plasmic-name={"chakraUiThead"}
                data-plasmic-override={overrides.chakraUiThead}
                className={classNames("__wab_instance", sty.chakraUiThead)}
              >
                <Tr
                  className={classNames(
                    "__wab_instance",
                    sty.chakraUiTr___6NRaD
                  )}
                >
                  <Th
                    className={classNames(
                      "__wab_instance",
                      sty.chakraUiTh__kpDAg
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cMb5Q
                      )}
                    >
                      {"TO CONVERT"}
                    </div>
                  </Th>
                  <Th
                    className={classNames(
                      "__wab_instance",
                      sty.chakraUiTh__fBdye
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rMkMh
                      )}
                    >
                      {"INTO"}
                    </div>
                  </Th>
                  <Th
                    className={classNames(
                      "__wab_instance",
                      sty.chakraUiTh__hOiB
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cG05F
                      )}
                    >
                      {"MULTIPLY BY"}
                    </div>
                  </Th>
                </Tr>
              </Thead>
              <Tbody
                data-plasmic-name={"chakraUiTbody"}
                data-plasmic-override={overrides.chakraUiTbody}
                className={classNames("__wab_instance", sty.chakraUiTbody)}
              >
                <Tr
                  className={classNames(
                    "__wab_instance",
                    sty.chakraUiTr__oak8E
                  )}
                >
                  <Td
                    className={classNames(
                      "__wab_instance",
                      sty.chakraUiTd__iay3C
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yEzs3
                      )}
                    >
                      {"inches"}
                    </div>
                  </Td>
                  <Td
                    className={classNames(
                      "__wab_instance",
                      sty.chakraUiTd__kvgsl
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bH1Yn
                      )}
                    >
                      {"millimetres (mm)"}
                    </div>
                  </Td>
                  <Td
                    className={classNames(
                      "__wab_instance",
                      sty.chakraUiTd__vGe71
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__s2Pnz
                      )}
                    >
                      {"25.4"}
                    </div>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Table
            className={classNames("__wab_instance", sty.chakraUiTable__wcO6)}
            colorScheme={"gray" as const}
            size={"md" as const}
            variant={"simple" as const}
          >
            <TableCaption
              data-plasmic-name={"chakraUiTableCaption"}
              data-plasmic-override={overrides.chakraUiTableCaption}
              className={classNames("__wab_instance", sty.chakraUiTableCaption)}
              placement={"bottom" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xOIsP
                )}
              >
                {"Imperial to metric conversion factors"}
              </div>
            </TableCaption>
          </Table>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "chakraUiTableContainer",
    "chakraUiThead",
    "chakraUiTbody",
    "chakraUiTableCaption"
  ],
  chakraUiTableContainer: [
    "chakraUiTableContainer",
    "chakraUiThead",
    "chakraUiTbody"
  ],
  chakraUiThead: ["chakraUiThead"],
  chakraUiTbody: ["chakraUiTbody"],
  chakraUiTableCaption: ["chakraUiTableCaption"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  chakraUiTableContainer: typeof TableContainer;
  chakraUiThead: typeof Thead;
  chakraUiTbody: typeof Tbody;
  chakraUiTableCaption: typeof TableCaption;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTable__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTable__VariantsArgs;
    args?: PlasmicTable__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTable__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTable__ArgsType,
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
          internalArgPropNames: PlasmicTable__ArgProps,
          internalVariantPropNames: PlasmicTable__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTable__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTable";
  } else {
    func.displayName = `PlasmicTable.${nodeName}`;
  }
  return func;
}

export const PlasmicTable = Object.assign(
  // Top-level PlasmicTable renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    chakraUiTableContainer: makeNodeComponent("chakraUiTableContainer"),
    chakraUiThead: makeNodeComponent("chakraUiThead"),
    chakraUiTbody: makeNodeComponent("chakraUiTbody"),
    chakraUiTableCaption: makeNodeComponent("chakraUiTableCaption"),

    // Metadata about props expected for PlasmicTable
    internalVariantProps: PlasmicTable__VariantProps,
    internalArgProps: PlasmicTable__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTable;
/* prettier-ignore-end */
