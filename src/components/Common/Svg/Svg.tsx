import { CSSObject, jsx } from '@emotion/react';
import { SVGProps } from 'react';

type SvgProps = SVGProps<SVGSVGElement>;

export default ({ width, height, ...props }: SvgProps) => {
  const css: CSSObject = {
    width: `auto`,
    height: `100%`,
  };

  return jsx(`svg`, {
    css,
    focusable: false,
    pointerEvents: `none`,
    viewBox: `0 0 ${width || 24} ${height || 24}`,
    ...props,
  });
};
