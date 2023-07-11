// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Line21IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Line21Icon(props: Line21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 12 2'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={'currentColor'}
        strokeWidth={'1.8'}
        strokeLinecap={'round'}
        d={'M.9 1.1h10.2'}
      ></path>
    </svg>
  );
}

export default Line21Icon;
/* prettier-ignore-end */