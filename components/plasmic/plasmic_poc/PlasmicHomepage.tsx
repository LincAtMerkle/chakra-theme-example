// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x7VZoMTkaRPxy26VUXVkvK
// Component: xq29wAEBU6Yg
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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
import { Heading } from "@chakra-ui/react"; // plasmic-import: STXKiV1w_j5/codeComponent
import { Button } from "@chakra-ui/react"; // plasmic-import: QLxDRPfRLT0/codeComponent
import { ButtonPreview } from "../../custom/ButtonPreview"; // plasmic-import: gT3XIuurc5/codeComponent
import { ChakraDocs } from "../../custom/tokenSheets/ChakraDocs"; // plasmic-import: -RU2ZbsAIK/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc.module.css"; // plasmic-import: x7VZoMTkaRPxy26VUXVkvK/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: xq29wAEBU6Yg/css

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  buttonPreview?: p.Flex<typeof ButtonPreview>;
};

export interface DefaultHomepageProps {}

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

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

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
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <Heading
              className={classNames(
                "__wab_instance",
                sty.chakraUiHeading__waWgh
              )}
              noOfLines={1 as const}
              size={"4xl" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ucc3
                )}
              >
                {"Button"}
              </div>
            </Heading>

            <Heading
              className={classNames(
                "__wab_instance",
                sty.chakraUiHeading__oDb8
              )}
              noOfLines={1 as const}
              size={"2xl" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__neP4Q
                )}
              >
                {"Sizes"}
              </div>
            </Heading>

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__c30Kb)}
              >
                <Button
                  className={classNames(
                    "__wab_instance",
                    sty.chakraUiButton__h1YT
                  )}
                  size={"xl" as const}
                  variant={"primary" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7Iupc
                    )}
                  >
                    {"Butdssdton"}
                  </div>
                </Button>

                <Button
                  className={classNames(
                    "__wab_instance",
                    sty.chakraUiButton__skTi8
                  )}
                  size={"sm" as const}
                  variant={"primary" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wo9UP
                    )}
                  >
                    {"Butdssdton"}
                  </div>
                </Button>

                <Button
                  className={classNames(
                    "__wab_instance",
                    sty.chakraUiButton___1ZoHu
                  )}
                  size={"md" as const}
                  variant={"solid" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__l95Ar
                    )}
                  >
                    {"Butdssdton"}
                  </div>
                </Button>

                <Button
                  className={classNames(
                    "__wab_instance",
                    sty.chakraUiButton__kPpgs
                  )}
                  size={"lg" as const}
                  variant={"primary" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xwhUi
                    )}
                  >
                    {"Butdssdton"}
                  </div>
                </Button>
              </p.Stack>
            ) : null}

            <Heading
              className={classNames(
                "__wab_instance",
                sty.chakraUiHeading__aYk18
              )}
              noOfLines={1 as const}
              size={"2xl" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rymde
                )}
              >
                {"States"}
              </div>
            </Heading>

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mNbNo)}
              >
                <Button
                  className={classNames(
                    "__wab_instance",
                    sty.chakraUiButton___7RkOh
                  )}
                  isActive={true}
                  size={"xl" as const}
                  variant={"primary" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rLehw
                    )}
                  >
                    {"Butdssdton"}
                  </div>
                </Button>

                <Button
                  className={classNames(
                    "__wab_instance",
                    sty.chakraUiButton__dvVvI
                  )}
                  isDisabled={true}
                  size={"sm" as const}
                  variant={"primary" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jNooV
                    )}
                  >
                    {"Butdssdton"}
                  </div>
                </Button>

                <Button
                  className={classNames(
                    "__wab_instance",
                    sty.chakraUiButton__cuF47
                  )}
                  isLoading={true}
                  size={"md" as const}
                  variant={"primary" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zzuQl
                    )}
                  >
                    {"Butdssdton"}
                  </div>
                </Button>
              </p.Stack>
            ) : null}

            <Heading
              className={classNames(
                "__wab_instance",
                sty.chakraUiHeading__uDdQa
              )}
              noOfLines={1 as const}
              size={"2xl" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i7Izv
                )}
              >
                {"Code Preview"}
              </div>
            </Heading>

            <ButtonPreview
              data-plasmic-name={"buttonPreview"}
              data-plasmic-override={overrides.buttonPreview}
              className={classNames("__wab_instance", sty.buttonPreview)}
            />

            <Heading
              className={classNames(
                "__wab_instance",
                sty.chakraUiHeading___8NksC
              )}
              noOfLines={1 as const}
              size={"2xl" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dmKtQ
                )}
              >
                {"Variants"}
              </div>
            </Heading>

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hdpUl)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dVUb)}
                  >
                    <Heading
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiHeading___6ZOk1
                      )}
                      noOfLines={1 as const}
                      size={"xl" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__bdh7S
                        )}
                      >
                        {"Primary"}
                      </div>
                    </Heading>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiButton__qcSzR
                      )}
                      variant={"primary" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pK5GN
                        )}
                      >
                        {"Butdssdton"}
                      </div>
                    </Button>
                  </p.Stack>
                ) : null}
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__sUIw)}
                  >
                    <Heading
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiHeading__xxIfT
                      )}
                      noOfLines={1 as const}
                      size={"xl" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__si6HN
                        )}
                      >
                        {"Secondary"}
                      </div>
                    </Heading>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiButton___26Krb
                      )}
                      variant={"primary" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__crhKr
                        )}
                      >
                        {"Butdssdton"}
                      </div>
                    </Button>
                  </p.Stack>
                ) : null}
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__zrgs6)}
                  >
                    <Heading
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiHeading__vCtwH
                      )}
                      noOfLines={1 as const}
                      size={"xl" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__onNt3
                        )}
                      >
                        {"Negative"}
                      </div>
                    </Heading>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiButton__ralU
                      )}
                      variant={"primary" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fbWz
                        )}
                      >
                        {"Butdssdton"}
                      </div>
                    </Button>
                  </p.Stack>
                ) : null}
              </p.Stack>
            ) : null}

            <Heading
              className={classNames(
                "__wab_instance",
                sty.chakraUiHeading__veg2H
              )}
              noOfLines={1 as const}
              size={"2xl" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h7TA
                )}
              >
                {"Tokens"}
              </div>
            </Heading>

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__l0Vno)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gFqW)}
                  >
                    <Heading
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiHeading__mKv4P
                      )}
                      noOfLines={1 as const}
                      size={"xl" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__oo3I
                        )}
                      >
                        {"All"}
                      </div>
                    </Heading>

                    <ChakraDocs
                      className={classNames(
                        "__wab_instance",
                        sty.chakraDocs__hdd5Y
                      )}
                      path={"btn" as const}
                      set={"core/color" as const}
                      theme={"hm-light" as const}
                    />
                  </p.Stack>
                ) : null}
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wpVrj)}
                  >
                    <Heading
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiHeading__vtWks
                      )}
                      noOfLines={1 as const}
                      size={"xl" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mUueH
                        )}
                      >
                        {"Primary"}
                      </div>
                    </Heading>

                    <ChakraDocs
                      className={classNames(
                        "__wab_instance",
                        sty.chakraDocs__uUn4C
                      )}
                      path={"btn.primary" as const}
                      set={"core/color" as const}
                      theme={"hm-light" as const}
                    />
                  </p.Stack>
                ) : null}
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wlpvQ)}
                  >
                    <Heading
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiHeading__erOKe
                      )}
                      noOfLines={1 as const}
                      size={"xl" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___7JOJm
                        )}
                      >
                        {"Secondary"}
                      </div>
                    </Heading>

                    <ChakraDocs
                      className={classNames(
                        "__wab_instance",
                        sty.chakraDocs___9D0Xi
                      )}
                      path={"btn.secondary" as const}
                      set={"core/color" as const}
                      theme={"hm-light" as const}
                    />
                  </p.Stack>
                ) : null}
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__sLxYq)}
                  >
                    <Heading
                      className={classNames(
                        "__wab_instance",
                        sty.chakraUiHeading__zixBf
                      )}
                      noOfLines={1 as const}
                      size={"xl" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jzE8V
                        )}
                      >
                        {"Negative"}
                      </div>
                    </Heading>

                    <ChakraDocs
                      className={classNames(
                        "__wab_instance",
                        sty.chakraDocs___6VAja
                      )}
                      path={"btn.negative" as const}
                      set={"core/color" as const}
                      theme={"hm-light" as const}
                    />
                  </p.Stack>
                ) : null}
              </p.Stack>
            ) : null}
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "buttonPreview"],
  section: ["section", "buttonPreview"],
  buttonPreview: ["buttonPreview"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  buttonPreview: typeof ButtonPreview;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    buttonPreview: makeNodeComponent("buttonPreview"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
