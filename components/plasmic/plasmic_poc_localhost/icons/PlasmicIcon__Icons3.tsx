// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icons3IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icons3Icon(props: Icons3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 24'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M5.81 19.748a.9.9 0 00-.331-.765c-2.2-1.78-3.579-4.43-3.579-7.396C1.9 6.277 6.387 1.9 12.01 1.9c5.61 0 10.098 4.376 10.098 9.687 0 5.31-4.499 9.686-10.11 9.686-.932 0-1.818-.119-2.671-.345a.9.9 0 00-.517.016l-3.164 1.058.164-2.254z'
        }
        stroke={'currentColor'}
        strokeWidth={'1.8'}
        strokeLinejoin={'round'}
      ></path>

      <path
        d={
          'M10.15 8.795c.072.01.133.021.205.032 1.073.229 2.17 1.21 3.014 1.793.47.334.869.303 1.339-.01 1-.688 2.038-1.345 3.062-2.023.278-.188.567-.386.905-.136.374.271.145.563-.048.834-1.013 1.398-2.014 2.795-3.039 4.182-.7.96-1.688 1.095-2.75.417-.735-.48-1.494-.928-2.218-1.428-.482-.334-.88-.292-1.338.02-1.013.689-2.038 1.346-3.063 2.024-.277.187-.567.385-.904.125-.338-.25-.157-.532.024-.793 1.049-1.439 2.086-2.878 3.135-4.317.35-.49 1-.782 1.676-.72z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Icons3Icon;
/* prettier-ignore-end */