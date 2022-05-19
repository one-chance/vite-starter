import { CSSObject, jsx } from '@emotion/react';
import { HTMLAttributes, LabelHTMLAttributes } from 'react';

import { colors, fontSizes, fontWeights } from '@styles/Theme';

export type Props = (
  | HTMLAttributes<HTMLSpanElement>
  | LabelHTMLAttributes<HTMLLabelElement>
) & {
  component?: string;
  size?:
    | 'medium'
    | 'xx-small'
    | 'x-small'
    | 'small'
    | 'large'
    | 'x-large'
    | 'xx-large';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  xxSmall?: boolean;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  xxLarge?: boolean;
  xxxLarge?: boolean;
  light?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  black?: boolean;
  color?: string;
  start?: boolean;
  center?: boolean;
  fill?: boolean;
};

export default ({
  component = `span`,
  size,
  weight,
  xxSmall,
  xSmall,
  small,
  large,
  xLarge,
  xxLarge,
  xxxLarge,
  light,
  medium,
  semiBold,
  bold,
  black,
  color,
  start,
  center,
  fill,
  ...props
}: Props) => {
  const css: CSSObject = {
    ...colors[color || `black`],
    ...fontSizes[
      size ||
        (xxSmall && `xxSmall`) ||
        (xSmall && `xSmall`) ||
        (small && `small`) ||
        (large && `large`) ||
        (xLarge && `xLarge`) ||
        (xxLarge && `xxLarge`) ||
        (xxxLarge && `xxxLarge`) ||
        `medium`
    ],
    ...fontWeights[
      weight ||
        (light && `light`) ||
        (medium && `medium`) ||
        (semiBold && `semiBold`) ||
        (bold && `bold`) ||
        (black && `black`) ||
        `regular`
    ],
    ...(start && { textAlign: `left` }),
    ...(center && { textAlign: `center` }),
    ...(fill && { flex: 1 }),
    ...{ fontFamily: `Noto Sans KR` },
  };

  return jsx(component, { css, ...props });
};
