/* eslint-disable react/display-name */
import react, { useMemo } from 'react';
import { cx } from '@chakra-ui/shared-utils';
//import root from "react-shadow";
import root from 'react-shadow/emotion';
import { ReactNode } from 'react';
import React from 'react';

type ModifierObj = Record<string, any>;

export const ModifierContext = react.createContext<ModifierObj>({});

export const useModifiers = () => {
  const ctx = react.useContext(ModifierContext);

  if (!ctx) {
    throw new Error('useModifiers must be used within a ModifierProvider');
  }

  return ctx;
};

const useRootCtx = (): ModifierObj => {
  const ctx = react.useContext(ModifierContext);

  if (!ctx) {
    return {} as ModifierObj;
  }

  return ctx;
};

interface ModifierProviderProps {
  modifiers: any;
  children: ReactNode;
}

export const ModifierProvider = ({
  modifiers,
  children,
}: ModifierProviderProps) => {
  const ctx = useRootCtx();
  const mergedModifiers = useMemo(() => {
    return {
      ...ctx?.modifiers,
      ...modifiers,
    };
  }, [ctx?.modifiers, modifiers]);

  return (
    <ModifierContext.Provider
      value={{ modifiers: mergedModifiers, rawModifiers: modifiers }}
    >
      {children}
    </ModifierContext.Provider>
  );
};

export const ComponentContext = react.createContext({
  name: '',
  map: {},
});

export const useComponentCtx = () => {
  return react.useContext(ComponentContext);
};

export interface ComponentProviderProps {
  name: string;
  children: any;
  className?: string;
}

export const ComponentProvider = ({
  name,
  children,
  className,
}: ComponentProviderProps) => {
  const modifiers = useModifiers();

  const { type, color } = modifiers.modifiers;

  const [styleSheets, setStyleSheets] = react.useState<CSSStyleSheet[]>([]);
  let cssSync = null;

  const css = useMemo(async () => {
    if (typeof window) {
      const { default: compSheet } = await import(`./${name}/${name}.tokens`, {
        assert: { type: 'css' },
      });

      // const { default: sheet2 } = await import(
      //     `../${name}/tokens/${name}-${type}-${color}.tokens`,
      //     {
      //         assert: { type: "css" },
      //     }
      // );

      const { default: colorSheet } = await import(
        `./${name}/tokens/${name}-${color}.tokens`,
        {
          assert: { type: 'css' },
        }
      );

      const stylesheet = new CSSStyleSheet();
      -(
        // Add some CSS
        stylesheet.replaceSync(colorSheet + compSheet)
      );

      setStyleSheets([stylesheet]);

      // setStyleSheets([sheet]);
      return compSheet;
    }
  }, [type, color, name, setStyleSheets]);

  return (
    <ComponentContext.Provider value={{ name, map: cssSync || css }}>
      <root.div styleSheets={styleSheets} className={className}>
        {children}
      </root.div>
    </ComponentContext.Provider>
  );
};

export const wrapTokens =
  (Element: React.ComponentType, selector?: string) => (props) => {

    const WrappedElement = () => {
      const { children, className, ...rest } = props;
      const { name, map } = useComponentCtx();

      const selectorClass = map[`${name}__${selector}`];

      const propsClasses = Object.keys(rest)
        .map((key) => typeof rest[key] === 'string' && `${name}__${rest[key]}`)
        .join(' ');

      // Object.keys(rest).forEach((key) => {
      //   console.log('key:', key)
      //   console.log('value:', rest[key])
      //   console.log(`${name}__${key}__${rest[key]}`)
      // })

      const klass = cx(
        selectorClass,
        `${name}__${selector}`,
        propsClasses,
        className
      );

      return (
        <Element className={klass} {...rest}>
          {children}
        </Element>
      );
    };

    const elName = Element.displayName?.toLowerCase() || 'component'
    return (
      <ComponentProvider name={elName} className={props.className}>
        <WrappedElement {...props} />
      </ComponentProvider>
    );
  };