import { HTMLAttributes } from 'react';

import { CSSObject, jsx } from '@emotion/react';

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  height?: number;
  margin: number;
  color?: string;
  radius?: number;
};

export default ({ height, margin, color, radius, ...props }: DividerProps) => {
  const css: CSSObject = {
    width: `100%`,
    height: `${height}px` || `1px`,
    border: `none`,
    borderRadius: `${radius}px` || undefined,
    backgroundColor: color || `#000000`,
    margin: `${margin}px 0`,
  };

  return jsx(`hr`, { css, ...props });
};
