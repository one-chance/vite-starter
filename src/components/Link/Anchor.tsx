import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  open?: boolean;
};

export default ({ children, open, ...props }: Props) =>
  open ? (
    <a rel="noreferrer noopener" target="_blank" {...props}>
      {children}
    </a>
  ) : (
    <a {...props}>{children}</a>
  );
