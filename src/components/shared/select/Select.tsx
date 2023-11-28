import { ReactNode, useEffect, useState, useRef, HTMLAttributes } from 'react';

import { CSSObject } from '@emotion/react';

import { FlexView, Icon, Text } from '@components/shared';

type SelectProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  width?: number;
  height?: number;
  children: ReactNode;
  disabled?: boolean;
  error?: boolean;
};

export default function Select({
  label,
  width,
  height,
  children,
  disabled,
  ...props
}: SelectProps) {
  const selectRef = useRef<HTMLDivElement>(null);
  const optionListRef = useRef<HTMLDivElement>(null);
  const [showOption, setShowOption] = useState(false);

  const wrapperCSS: CSSObject = {
    width: width ? `${width}px` : `100%`,
    position: `relative`,
    userSelect: `none`,
  };

  const selectCSS: CSSObject = {
    height: height ? `${height}px` : `40px`,
    cursor: `pointer`,
    padding: `0 8px`,
    backgroundColor: `#FFF`,
    border: `1px solid #DCDEEA`,
    borderRadius: `4px`,
    ...(showOption && { border: `1px solid #358CFE` }),
    ...(disabled && { filter: `opacity(50%)`, pointerEvents: `none` }),
  };

  const optionListCSS: CSSObject = {
    position: `absolute`,
    zIndex: 1000,
    width: `100%`,
    marginTop: height ? `${height}px` : `40px`,
    cursor: `pointer`,
    backgroundColor: `#FFFFFF`,
    borderRadius: `4px`,
    boxShadow: `0 0 2px rgba(0, 0, 0, 0.3)`,
  };

  useEffect(() => {
    const autoClose = (e: CustomEvent<MouseEvent>) => {
      if (
        !selectRef.current?.contains(e.target as Node) &&
        !optionListRef.current?.contains(e.target as Node)
      ) {
        e.stopPropagation();
        setShowOption(false);
      }
    };

    window.addEventListener(`mousedown`, autoClose as EventListener);

    return () => {
      window.removeEventListener(`mousedown`, autoClose as EventListener);
    };
  }, []);

  return (
    <FlexView
      ref={selectRef}
      contents="start"
      css={wrapperCSS}
      onClick={() => {
        if (!disabled) setShowOption(!showOption);
      }}
    >
      <FlexView
        contents="between"
        css={selectCSS}
        items="center"
        row
        {...props}
      >
        <Text>{label}</Text>
        <Icon name={showOption ? `arrowUp` : `arrowDown`} size={16} />
      </FlexView>

      {showOption && (
        <FlexView ref={optionListRef} css={optionListCSS}>
          {children}
        </FlexView>
      )}
    </FlexView>
  );
}
