import { CSSObject } from '@emotion/react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import * as Icons from '@assets/images/Icons';

export type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  name: string;
  color?: string;
  size?: number;
};

const defaultCSS: CSSObject = {
  display: `inline-flex`,
};

export default ({ name, color, size, ...props }: Props) => {
  const RenderIcon = () => Icons[name as keyof typeof Icons](color as string);
  const css: CSSObject = {
    ...defaultCSS,
    height: size || 24,
    // fill: color || TextColors.text,
  };

  return (
    <span css={css} {...props}>
      <RenderIcon />
    </span>
  );
};
