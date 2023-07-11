// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: XU0q7sRsZz

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
import { Switch } from '@chakra-ui/react'; // plasmic-import: -NvC0LgQXxGITF/codeComponent
import { Text } from '@chakra-ui/react'; // plasmic-import: SdN14ngBJybRru/codeComponent
import { LoginWithCentredForm } from '../../chakra/chakraPro/Application/Authentication/LoginWithCentredForm'; // plasmic-import: PZuCg-eLQu/codeComponent
import { Container } from '@chakra-ui/react'; // plasmic-import: N75QIOSVwX/codeComponent
import { Stack } from '@chakra-ui/react'; // plasmic-import: COXAdXyGiCzfNm/codeComponent
import { Logo } from '../../chakra/chakraPro/Application/Authentication/LoginWithCentredForm'; // plasmic-import: 1Ex1wCgkK3/codeComponent
import { Heading } from '@chakra-ui/react'; // plasmic-import: 0G7l8BbhtHSG-/codeComponent
import { HStack } from '@chakra-ui/react'; // plasmic-import: s_UAyIpoEi/codeComponent
import { Box } from '@chakra-ui/react'; // plasmic-import: -E4B7lTUoD/codeComponent
import { FormControl } from '@chakra-ui/react'; // plasmic-import: 7qBVfEit46s/codeComponent
import { FormLabel } from '@chakra-ui/react'; // plasmic-import: qrPwpFjI80f/codeComponent
import { Input } from '@chakra-ui/react'; // plasmic-import: af17Ycvvo_OQfS/codeComponent
import { PasswordField } from '../../chakra/chakraPro/Application/Authentication/LoginWithCentredForm'; // plasmic-import: 3w3N64VhcL/codeComponent
import { Checkbox } from '@chakra-ui/react'; // plasmic-import: FOG2BpAjXwH/codeComponent
import { Divider } from '@chakra-ui/react'; // plasmic-import: 5hSSW3LzA3B/codeComponent
import { OAuthButtonGroup } from '../../chakra/chakraPro/Application/Authentication/LoginWithCentredForm'; // plasmic-import: LW0AKH5m61/codeComponent

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_plasmic_poc_localhost.module.css'; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from './PlasmicTestGreg.module.css'; // plasmic-import: XU0q7sRsZz/css

export type PlasmicTestGreg__VariantMembers = {};
export type PlasmicTestGreg__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestGreg__VariantsArgs;
export const PlasmicTestGreg__VariantProps = new Array<VariantPropType>();

export type PlasmicTestGreg__ArgsType = {};
type ArgPropType = keyof PlasmicTestGreg__ArgsType;
export const PlasmicTestGreg__ArgProps = new Array<ArgPropType>();

export type PlasmicTestGreg__OverridesType = {
  testGreg?: p.Flex<'div'>;
  chakraUiSwitch?: p.Flex<typeof Switch>;
  loginWithCentredForm?: p.Flex<typeof LoginWithCentredForm>;
  chakraUiContainer?: p.Flex<typeof Container>;
  logo?: p.Flex<typeof Logo>;
  chakraUiHeading?: p.Flex<typeof Heading>;
  chakraUiBox?: p.Flex<typeof Box>;
  chakraUiFormControl?: p.Flex<typeof FormControl>;
  chakraUiFormLabel?: p.Flex<typeof FormLabel>;
  chakraUiInput?: p.Flex<typeof Input>;
  passwordField?: p.Flex<typeof PasswordField>;
  chakraUiCheckbox?: p.Flex<typeof Checkbox>;
  oAuthButtonGroup?: p.Flex<typeof OAuthButtonGroup>;
};

export interface DefaultTestGregProps {}

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

function PlasmicTestGreg__RenderFunc(props: {
  variants: PlasmicTestGreg__VariantsArgs;
  args: PlasmicTestGreg__ArgsType;
  overrides: PlasmicTestGreg__OverridesType;
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
          data-plasmic-name={'testGreg'}
          data-plasmic-override={overrides.testGreg}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.testGreg
          )}
        >
          <Button
            className={classNames('__wab_instance', sty.chakraUiButton__lq94P)}
            isActive={false}
            isDisabled={false}
            isLoading={false}
            size={'xs' as const}
            variant={'primary1' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lmEoT
              )}
            >
              {'Button'}
            </div>
          </Button>
          <Button
            className={classNames('__wab_instance', sty.chakraUiButton__ylGg)}
            variant={'primary' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vdmay
              )}
            >
              {'Button'}
            </div>
          </Button>
          <Button
            className={classNames('__wab_instance', sty.chakraUiButton__kiR8L)}
            isActive={true}
            isDisabled={false}
            isLoading={false}
            size={'md' as const}
            variant={'primary1' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vdtC
              )}
            >
              {'Button'}
            </div>
          </Button>
          <Switch
            data-plasmic-name={'chakraUiSwitch'}
            data-plasmic-override={overrides.chakraUiSwitch}
            className={classNames('__wab_instance', sty.chakraUiSwitch)}
            colorScheme={'blue' as const}
            isChecked={false}
            isDisabled={false}
            isInvalid={false}
            size={'sm' as const}
            spacing={``}
          />

          <Text
            className={classNames('__wab_instance', sty.chakraUiText__icVqZ)}
            fontStyle={'italic' as const}
            size={'sm' as const}
            variant={'bold' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aPhN
              )}
            >
              {'Some Text'}
            </div>
          </Text>
          <LoginWithCentredForm
            data-plasmic-name={'loginWithCentredForm'}
            data-plasmic-override={overrides.loginWithCentredForm}
            className={classNames('__wab_instance', sty.loginWithCentredForm)}
          >
            <Container
              data-plasmic-name={'chakraUiContainer'}
              data-plasmic-override={overrides.chakraUiContainer}
              centerContent={false}
              className={classNames('__wab_instance', sty.chakraUiContainer)}
              px={0 as const}
              py={'5' as const}
              variant={'colorfulVariant' as const}
            >
              <Stack
                className={classNames(
                  '__wab_instance',
                  sty.chakraUiStack__bwbrS
                )}
                direction={'column' as const}
                spacing={8 as const}
              >
                <Logo
                  data-plasmic-name={'logo'}
                  data-plasmic-override={overrides.logo}
                  className={classNames('__wab_instance', sty.logo)}
                />

                <Stack
                  className={classNames(
                    '__wab_instance',
                    sty.chakraUiStack___2SApl
                  )}
                  direction={'column' as const}
                  spacing={'8' as const}
                >
                  <Stack
                    className={classNames(
                      '__wab_instance',
                      sty.chakraUiStack__bFv7U
                    )}
                    direction={'column' as const}
                    spacing={'20' as const}
                  >
                    <Heading
                      data-plasmic-name={'chakraUiHeading'}
                      data-plasmic-override={overrides.chakraUiHeading}
                      className={classNames(
                        '__wab_instance',
                        sty.chakraUiHeading
                      )}
                      noOfLines={1 as const}
                      size={'20' as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sXEpX
                        )}
                      >
                        {'Log in to your account'}
                      </div>
                    </Heading>
                    <HStack
                      className={classNames(
                        '__wab_instance',
                        sty.chakraUiHStack___7QlNb
                      )}
                      direction={'row' as const}
                      justify={'center' as const}
                      spacing={'1' as const}
                    >
                      <Text
                        className={classNames(
                          '__wab_instance',
                          sty.chakraUiText__eLmAu
                        )}
                        fontStyle={'normal' as const}
                        size={'md' as const}
                        variant={'regular' as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tvs7T
                          )}
                        >
                          {"Don't have an account?"}
                        </div>
                      </Text>
                      <Button
                        className={classNames(
                          '__wab_instance',
                          sty.chakraUiButton__ho6Me
                        )}
                        variant={'link' as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__vWqts
                          )}
                        >
                          {'Sign up'}
                        </div>
                      </Button>
                    </HStack>
                  </Stack>
                </Stack>
                <Box
                  data-plasmic-name={'chakraUiBox'}
                  data-plasmic-override={overrides.chakraUiBox}
                  className={classNames('__wab_instance', sty.chakraUiBox)}
                  px={'4' as const}
                  py={'0' as const}
                >
                  <Stack
                    className={classNames(
                      '__wab_instance',
                      sty.chakraUiStack__tG5Xb
                    )}
                    direction={'column' as const}
                    spacing={'6' as const}
                  >
                    <Stack
                      className={classNames(
                        '__wab_instance',
                        sty.chakraUiStack__dHxaL
                      )}
                      direction={'column' as const}
                      spacing={'5' as const}
                    >
                      <FormControl
                        data-plasmic-name={'chakraUiFormControl'}
                        data-plasmic-override={overrides.chakraUiFormControl}
                        className={classNames(
                          '__wab_instance',
                          sty.chakraUiFormControl
                        )}
                      >
                        <FormLabel
                          data-plasmic-name={'chakraUiFormLabel'}
                          data-plasmic-override={overrides.chakraUiFormLabel}
                          className={classNames(
                            '__wab_instance',
                            sty.chakraUiFormLabel
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__n0MJp
                            )}
                          >
                            {'Email'}
                          </div>
                        </FormLabel>
                        <Input
                          data-plasmic-name={'chakraUiInput'}
                          data-plasmic-override={overrides.chakraUiInput}
                          className={classNames(
                            '__wab_instance',
                            sty.chakraUiInput
                          )}
                          errorBorderColor={'red.500' as const}
                          focusBorderColor={'blue.500' as const}
                        />

                        <PasswordField
                          data-plasmic-name={'passwordField'}
                          data-plasmic-override={overrides.passwordField}
                          className={classNames(
                            '__wab_instance',
                            sty.passwordField
                          )}
                        />
                      </FormControl>
                      <HStack
                        className={classNames(
                          '__wab_instance',
                          sty.chakraUiHStack__zNaF
                        )}
                        direction={'row' as const}
                        justify={'space-between' as const}
                        spacing={8 as const}
                      >
                        <Checkbox
                          data-plasmic-name={'chakraUiCheckbox'}
                          data-plasmic-override={overrides.chakraUiCheckbox}
                          className={classNames(
                            '__wab_instance',
                            sty.chakraUiCheckbox
                          )}
                          colorScheme={'blue' as const}
                          spacing={'0.5rem' as const}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___3N4Bp
                            )}
                          >
                            {'Checkbox'}
                          </div>
                        </Checkbox>
                        <Button
                          className={classNames(
                            '__wab_instance',
                            sty.chakraUiButton__lSdXq
                          )}
                          size={'sm' as const}
                          variant={'link' as const}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__njMxB
                            )}
                          >
                            {'Forgot password?'}
                          </div>
                        </Button>
                      </HStack>
                    </Stack>
                    <Stack
                      className={classNames(
                        '__wab_instance',
                        sty.chakraUiStack___9Ggin
                      )}
                      direction={'column' as const}
                      spacing={'6' as const}
                    >
                      <Button
                        className={classNames(
                          '__wab_instance',
                          sty.chakraUiButton__ztR8Z
                        )}
                        size={'xs' as const}
                        variant={'primary' as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__jIYwh
                          )}
                        >
                          {'Sign in'}
                        </div>
                      </Button>
                      <HStack
                        className={classNames(
                          '__wab_instance',
                          sty.chakraUiHStack__a5Knp
                        )}
                        direction={'row' as const}
                        spacing={8 as const}
                      >
                        <Divider
                          className={classNames(
                            '__wab_instance',
                            sty.chakraUiDivider__nPxc
                          )}
                        />

                        <Text
                          className={classNames(
                            '__wab_instance',
                            sty.chakraUiText__zf24I
                          )}
                          fontStyle={'normal' as const}
                          size={'md' as const}
                          variant={'regular' as const}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__sUx35
                            )}
                          >
                            {'or continue with'}
                          </div>
                        </Text>
                        <Divider
                          className={classNames(
                            '__wab_instance',
                            sty.chakraUiDivider__rcgp8
                          )}
                        />
                      </HStack>
                      <OAuthButtonGroup
                        data-plasmic-name={'oAuthButtonGroup'}
                        data-plasmic-override={overrides.oAuthButtonGroup}
                        className={classNames(
                          '__wab_instance',
                          sty.oAuthButtonGroup
                        )}
                      />
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Container>
          </LoginWithCentredForm>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  testGreg: [
    'testGreg',
    'chakraUiSwitch',
    'loginWithCentredForm',
    'chakraUiContainer',
    'logo',
    'chakraUiHeading',
    'chakraUiBox',
    'chakraUiFormControl',
    'chakraUiFormLabel',
    'chakraUiInput',
    'passwordField',
    'chakraUiCheckbox',
    'oAuthButtonGroup',
  ],
  chakraUiSwitch: ['chakraUiSwitch'],
  loginWithCentredForm: [
    'loginWithCentredForm',
    'chakraUiContainer',
    'logo',
    'chakraUiHeading',
    'chakraUiBox',
    'chakraUiFormControl',
    'chakraUiFormLabel',
    'chakraUiInput',
    'passwordField',
    'chakraUiCheckbox',
    'oAuthButtonGroup',
  ],
  chakraUiContainer: [
    'chakraUiContainer',
    'logo',
    'chakraUiHeading',
    'chakraUiBox',
    'chakraUiFormControl',
    'chakraUiFormLabel',
    'chakraUiInput',
    'passwordField',
    'chakraUiCheckbox',
    'oAuthButtonGroup',
  ],
  logo: ['logo'],
  chakraUiHeading: ['chakraUiHeading'],
  chakraUiBox: [
    'chakraUiBox',
    'chakraUiFormControl',
    'chakraUiFormLabel',
    'chakraUiInput',
    'passwordField',
    'chakraUiCheckbox',
    'oAuthButtonGroup',
  ],
  chakraUiFormControl: [
    'chakraUiFormControl',
    'chakraUiFormLabel',
    'chakraUiInput',
    'passwordField',
  ],
  chakraUiFormLabel: ['chakraUiFormLabel'],
  chakraUiInput: ['chakraUiInput'],
  passwordField: ['passwordField'],
  chakraUiCheckbox: ['chakraUiCheckbox'],
  oAuthButtonGroup: ['oAuthButtonGroup'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  testGreg: 'div';
  chakraUiSwitch: typeof Switch;
  loginWithCentredForm: typeof LoginWithCentredForm;
  chakraUiContainer: typeof Container;
  logo: typeof Logo;
  chakraUiHeading: typeof Heading;
  chakraUiBox: typeof Box;
  chakraUiFormControl: typeof FormControl;
  chakraUiFormLabel: typeof FormLabel;
  chakraUiInput: typeof Input;
  passwordField: typeof PasswordField;
  chakraUiCheckbox: typeof Checkbox;
  oAuthButtonGroup: typeof OAuthButtonGroup;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestGreg__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestGreg__VariantsArgs;
    args?: PlasmicTestGreg__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestGreg__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTestGreg__ArgsType,
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
          internalArgPropNames: PlasmicTestGreg__ArgProps,
          internalVariantPropNames: PlasmicTestGreg__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTestGreg__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'testGreg') {
    func.displayName = 'PlasmicTestGreg';
  } else {
    func.displayName = `PlasmicTestGreg.${nodeName}`;
  }
  return func;
}

export const PlasmicTestGreg = Object.assign(
  // Top-level PlasmicTestGreg renders the root element
  makeNodeComponent('testGreg'),
  {
    // Helper components rendering sub-elements
    chakraUiSwitch: makeNodeComponent('chakraUiSwitch'),
    loginWithCentredForm: makeNodeComponent('loginWithCentredForm'),
    chakraUiContainer: makeNodeComponent('chakraUiContainer'),
    logo: makeNodeComponent('logo'),
    chakraUiHeading: makeNodeComponent('chakraUiHeading'),
    chakraUiBox: makeNodeComponent('chakraUiBox'),
    chakraUiFormControl: makeNodeComponent('chakraUiFormControl'),
    chakraUiFormLabel: makeNodeComponent('chakraUiFormLabel'),
    chakraUiInput: makeNodeComponent('chakraUiInput'),
    passwordField: makeNodeComponent('passwordField'),
    chakraUiCheckbox: makeNodeComponent('chakraUiCheckbox'),
    oAuthButtonGroup: makeNodeComponent('oAuthButtonGroup'),

    // Metadata about props expected for PlasmicTestGreg
    internalVariantProps: PlasmicTestGreg__VariantProps,
    internalArgProps: PlasmicTestGreg__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
);

export default PlasmicTestGreg;
/* prettier-ignore-end */