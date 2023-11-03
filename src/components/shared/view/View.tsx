import { forwardRef, HTMLAttributes } from 'react';

import { jsx } from '@emotion/react';

export type ViewProps = HTMLAttributes<HTMLDivElement> & {
  component?: string;
};

const View = forwardRef<HTMLDivElement, ViewProps>(
  ({ component = `div`, ...props }: ViewProps, ref) =>
    jsx(component, { ref, ...props }),
);

export default View;
