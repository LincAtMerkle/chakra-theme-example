// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Frame5IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Frame5Icon(props: Frame5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 20 20'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M10 0C4.478 0 0 4.478 0 10c0 4.418 2.865 8.167 6.84 9.49.498.092.66-.218.66-.482v-1.861c-2.782.605-3.36-1.18-3.36-1.18-.456-1.156-1.112-1.464-1.112-1.464-.907-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.34 1.087 2.91.832.09-.646.348-1.088.635-1.337-2.22-.254-4.556-1.112-4.556-4.943a3.87 3.87 0 011.03-2.684c-.103-.252-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.59 9.59 0 0110 4.836a9.62 9.62 0 012.505.337c1.91-1.294 2.747-1.026 2.747-1.026.545 1.378.202 2.396.099 2.647.641.7 1.029 1.593 1.029 2.684 0 3.841-2.34 4.687-4.566 4.934.358.31.686.919.686 1.852v2.744c0 .266.16.579.668.48A10.003 10.003 0 0020 10c0-5.522-4.477-10-10-10z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Frame5Icon;
/* prettier-ignore-end */