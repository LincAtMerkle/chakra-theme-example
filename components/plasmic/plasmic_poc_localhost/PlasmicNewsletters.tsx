// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: GL-m1IaIGh

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
import { NewsletterFormWithImage } from "../../custom/chakraPro/Marketing/Newsletters/NewsletterFormWithImage"; // plasmic-import: V2R1kQlqx5DL/codeComponent
import { NewsletterFormInline } from "../../custom/chakraPro/Marketing/Newsletters/NewsletterFormInline"; // plasmic-import: U1cbd_Mvj90s/codeComponent
import { NewsletterFormInlineBoxed } from "../../custom/chakraPro/Marketing/Newsletters/NewsletterFormInlineBoxed"; // plasmic-import: vUnryTo0Q8V7/codeComponent
import { NewsletterFormCentred } from "../../custom/chakraPro/Marketing/Newsletters/NewsletterFormCentred"; // plasmic-import: q63Kt1ZuMVKx/codeComponent
import { NewsletterFormCentredBoxed } from "../../custom/chakraPro/Marketing/Newsletters/NewsletterFormCentredBoxed"; // plasmic-import: 0rg-KEPTO-O0/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicNewsletters.module.css"; // plasmic-import: GL-m1IaIGh/css

export type PlasmicNewsletters__VariantMembers = {};
export type PlasmicNewsletters__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewsletters__VariantsArgs;
export const PlasmicNewsletters__VariantProps = new Array<VariantPropType>();

export type PlasmicNewsletters__ArgsType = {};
type ArgPropType = keyof PlasmicNewsletters__ArgsType;
export const PlasmicNewsletters__ArgProps = new Array<ArgPropType>();

export type PlasmicNewsletters__OverridesType = {
  root?: p.Flex<"div">;
  newsletterFormWithImage?: p.Flex<typeof NewsletterFormWithImage>;
  newsletterFormInline?: p.Flex<typeof NewsletterFormInline>;
  newsletterFormInlineBoxed?: p.Flex<typeof NewsletterFormInlineBoxed>;
  newsletterFormCentred?: p.Flex<typeof NewsletterFormCentred>;
  newsletterFormCentredBoxed?: p.Flex<typeof NewsletterFormCentredBoxed>;
};

export interface DefaultNewslettersProps {}

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

function PlasmicNewsletters__RenderFunc(props: {
  variants: PlasmicNewsletters__VariantsArgs;
  args: PlasmicNewsletters__ArgsType;
  overrides: PlasmicNewsletters__OverridesType;
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
            className={classNames("__wab_instance", sty.chakraUiHeading__m7H5)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rDb2O
              )}
            >
              {"Newsletters"}
            </div>
          </Heading>
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__zXDdv)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nqP8
              )}
            >
              {"Newsletter form with image"}
            </div>
          </Heading>
          <NewsletterFormWithImage
            data-plasmic-name={"newsletterFormWithImage"}
            data-plasmic-override={overrides.newsletterFormWithImage}
            className={classNames(
              "__wab_instance",
              sty.newsletterFormWithImage
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__eLpNy)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__siQ9M
              )}
            >
              {"Newsletter form inline"}
            </div>
          </Heading>
          <NewsletterFormInline
            data-plasmic-name={"newsletterFormInline"}
            data-plasmic-override={overrides.newsletterFormInline}
            className={classNames("__wab_instance", sty.newsletterFormInline)}
          />

          <Heading
            className={classNames(
              "__wab_instance",
              sty.chakraUiHeading___5TOk1
            )}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zgW8T
              )}
            >
              {"Newsletter form inline boxed"}
            </div>
          </Heading>
          <NewsletterFormInlineBoxed
            data-plasmic-name={"newsletterFormInlineBoxed"}
            data-plasmic-override={overrides.newsletterFormInlineBoxed}
            className={classNames(
              "__wab_instance",
              sty.newsletterFormInlineBoxed
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__p96N)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dkHiz
              )}
            >
              {"Newsletter form centred"}
            </div>
          </Heading>
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__gCsma)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <NewsletterFormCentred
              data-plasmic-name={"newsletterFormCentred"}
              data-plasmic-override={overrides.newsletterFormCentred}
              className={classNames(
                "__wab_instance",
                sty.newsletterFormCentred
              )}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dtrcV
              )}
            >
              {"Newsletter form centred boxed"}
            </div>
            <NewsletterFormCentredBoxed
              data-plasmic-name={"newsletterFormCentredBoxed"}
              data-plasmic-override={overrides.newsletterFormCentredBoxed}
              className={classNames(
                "__wab_instance",
                sty.newsletterFormCentredBoxed
              )}
            />
          </Heading>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "newsletterFormWithImage",
    "newsletterFormInline",
    "newsletterFormInlineBoxed",
    "newsletterFormCentred",
    "newsletterFormCentredBoxed"
  ],
  newsletterFormWithImage: ["newsletterFormWithImage"],
  newsletterFormInline: ["newsletterFormInline"],
  newsletterFormInlineBoxed: ["newsletterFormInlineBoxed"],
  newsletterFormCentred: ["newsletterFormCentred"],
  newsletterFormCentredBoxed: ["newsletterFormCentredBoxed"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  newsletterFormWithImage: typeof NewsletterFormWithImage;
  newsletterFormInline: typeof NewsletterFormInline;
  newsletterFormInlineBoxed: typeof NewsletterFormInlineBoxed;
  newsletterFormCentred: typeof NewsletterFormCentred;
  newsletterFormCentredBoxed: typeof NewsletterFormCentredBoxed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewsletters__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewsletters__VariantsArgs;
    args?: PlasmicNewsletters__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewsletters__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewsletters__ArgsType,
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
          internalArgPropNames: PlasmicNewsletters__ArgProps,
          internalVariantPropNames: PlasmicNewsletters__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewsletters__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewsletters";
  } else {
    func.displayName = `PlasmicNewsletters.${nodeName}`;
  }
  return func;
}

export const PlasmicNewsletters = Object.assign(
  // Top-level PlasmicNewsletters renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    newsletterFormWithImage: makeNodeComponent("newsletterFormWithImage"),
    newsletterFormInline: makeNodeComponent("newsletterFormInline"),
    newsletterFormInlineBoxed: makeNodeComponent("newsletterFormInlineBoxed"),
    newsletterFormCentred: makeNodeComponent("newsletterFormCentred"),
    newsletterFormCentredBoxed: makeNodeComponent("newsletterFormCentredBoxed"),

    // Metadata about props expected for PlasmicNewsletters
    internalVariantProps: PlasmicNewsletters__VariantProps,
    internalArgProps: PlasmicNewsletters__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewsletters;
/* prettier-ignore-end */
