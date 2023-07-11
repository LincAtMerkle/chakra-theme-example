// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type UtsLogoIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function UtsLogoIcon(props: UtsLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 76 32'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M43.839 11.153h4.64v17.572h4.748V11.153h4.64V6.944H43.84v4.209zm-8.923 10.841c0 1.757-1.028 2.848-2.65 2.848-1.623 0-2.65-1.091-2.65-2.848V6.944h-4.74v15.12c0 4.308 2.983 6.994 7.39 6.994s7.39-2.686 7.39-6.994V6.944h-4.74v15.05zm35.221-6.2l-2.72-1.027c-1.489-.56-1.758-1.524-1.758-2.154 0-1.19.865-2.09 2.388-2.09s2.487.991 2.487 2.55v.595h4.442v-.496c0-4.045-2.784-6.568-6.929-6.568-4.145 0-6.859 2.983-6.859 6.3 0 3.315 1.658 5.072 4.804 6.263l3.047 1.162c1.36.531 1.892 1.26 1.892 2.352 0 1.523-.992 2.423-2.785 2.423-1.792 0-2.883-.829-2.883-2.586v-.794h-4.479v.766c0 4.045 3.118 6.56 7.362 6.56 4.641 0 7.291-2.82 7.291-6.83s-2.586-5.406-5.307-6.433M2.06 13.861L0 15.921l2.06 2.058 2.058-2.059-2.059-2.059zm6.67 2.549l1.565 1.566 2.062-2.062-2.097-2.097a2.168 2.168 0 00-3.061 0L0 21.023l2.062 2.062 6.674-6.675H8.73zm-.49 8.737l-2.06-2.062-1.567 1.565-1.566-1.566-2.062 2.062 2.098 2.097a2.168 2.168 0 003.06 0l2.098-2.097zm.49 3.627l-1.567-1.566-2.062 2.062L7.2 31.368a2.168 2.168 0 003.06 0l2.098-2.098-2.062-2.061-1.566 1.565zm4.123-4.124l-1.566-1.565-2.062 2.062 2.097 2.097a2.168 2.168 0 003.061 0l2.098-2.097-2.062-2.062-1.566 1.566zm2.549-5.685l-2.06 2.06 2.06 2.058 2.06-2.059-2.06-2.06z'
        }
        fill={'currentColor'}
      ></path>

      <path
        d={
          'M8.73 20.534l-1.567-1.566-2.062 2.062L7.2 23.127a2.168 2.168 0 003.06 0l7.2-7.198-2.063-2.062-6.674 6.674.007-.007zM8.733 0L5.987 2.745l2.745 2.746 2.747-2.745L8.732 0z'
        }
        fill={'currentColor'}
      ></path>

      <path
        d={
          'M5.305 8.992h1.97v3.897a2.859 2.859 0 012.912 0V8.992h1.97l1.29 1.29 2.749-2.75-2.75-2.749-1.289 1.29H5.305l-1.29-1.29-2.748 2.75 2.749 2.748 1.29-1.289z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default UtsLogoIcon;
/* prettier-ignore-end */