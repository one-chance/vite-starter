import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CSSObject } from '@emotion/react';

import { FlexView } from '@components/shared';

interface ModalProps {
  width: number;
  height: number;
  children: ReactNode;
  closePortal: (param: any) => void;
}

export default function Modal({
  width,
  height,
  children,
  closePortal,
}: ModalProps) {
  const container = document.getElementById(`root-modal`) as HTMLElement;

  const modalCSS: CSSObject = {
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    padding: `80px`,
    overflowY: `auto`,
    scrollbarWidth: `none`,
    '::-webkit-scrollbar': { display: `none` },
  };

  const backgoundCSS: CSSObject = {
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: `#0000004D`,
  };

  const contentCSS: CSSObject = {
    maxWidth: `calc(100% - 80px)`,
    width: `${width}px`,
    height: `${height}px`,
    padding: `40px`,
    backgroundColor: `#141414`,
    // border: `1px solid ${Colors.secondary10}`,
    zIndex: 1001,
    overflowY: `auto`,
    scrollbarWidth: `none`,
    '::-webkit-scrollbar': { display: `none` },
  };

  useEffect(() => {
    document.body.style.overflow = `hidden`;

    return () => {
      document.body.style.overflow = `unset`;
    };
  }, []);

  return container
    ? createPortal(
        <FlexView css={modalCSS} center>
          <FlexView
            css={backgoundCSS}
            role="presentation"
            onClick={closePortal}
          />

          <FlexView css={contentCSS}>{children}</FlexView>
        </FlexView>,
        container,
      )
    : null;
}
