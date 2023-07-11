// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: JhBwRcIJyc

import * as React from 'react';

import Head from 'next/head';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

import * as p from '@plasmicapp/react-web';
import * as ph from '@plasmicapp/react-web/lib/host';

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
  ensureGlobalVariants,
} from '@plasmicapp/react-web';
import { Button } from '@chakra-ui/react'; // plasmic-import: TdxMoalAZRL/codeComponent

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_plasmic_poc_localhost.module.css'; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from './PlasmicTestForThomas.module.css'; // plasmic-import: JhBwRcIJyc/css

export type PlasmicTestForThomas__VariantMembers = {};
export type PlasmicTestForThomas__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestForThomas__VariantsArgs;
export const PlasmicTestForThomas__VariantProps = new Array<VariantPropType>();

export type PlasmicTestForThomas__ArgsType = {};
type ArgPropType = keyof PlasmicTestForThomas__ArgsType;
export const PlasmicTestForThomas__ArgProps = new Array<ArgPropType>();

export type PlasmicTestForThomas__OverridesType = {
  root?: p.Flex<'div'>;
  chakraUiButton?: p.Flex<typeof Button>;
};

export interface DefaultTestForThomasProps {}

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

function PlasmicTestForThomas__RenderFunc(props: {
  variants: PlasmicTestForThomas__VariantsArgs;
  args: PlasmicTestForThomas__ArgsType;
  overrides: PlasmicTestForThomas__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants,
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
          data-plasmic-name={'root'}
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
          <Button
            data-plasmic-name={'chakraUiButton'}
            data-plasmic-override={overrides.chakraUiButton}
            className={classNames('__wab_instance', sty.chakraUiButton)}
            variant={'primary' as const}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'chakraUiButton'],
  chakraUiButton: ['chakraUiButton'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  chakraUiButton: typeof Button;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestForThomas__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestForThomas__VariantsArgs;
    args?: PlasmicTestForThomas__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestForThomas__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTestForThomas__ArgsType,
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
          internalArgPropNames: PlasmicTestForThomas__ArgProps,
          internalVariantPropNames: PlasmicTestForThomas__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTestForThomas__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicTestForThomas';
  } else {
    func.displayName = `PlasmicTestForThomas.${nodeName}`;
  }
  return func;
}

export const PlasmicTestForThomas = Object.assign(
  // Top-level PlasmicTestForThomas renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    chakraUiButton: makeNodeComponent('chakraUiButton'),

    // Metadata about props expected for PlasmicTestForThomas
    internalVariantProps: PlasmicTestForThomas__VariantProps,
    internalArgProps: PlasmicTestForThomas__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
);

export default PlasmicTestForThomas;
/* prettier-ignore-end */