import { useRef, useEffect, MutableRefObject } from 'react';

import { CSSObject } from '@emotion/react';

import { FlexView, Text } from '@components/shared';

type OptionProps = {
  css?: CSSObject;
  center?: boolean;
  values: string[];
  selected: string;
  onSelect: (index: number) => void;
};

export default function Option({
  css,
  center,
  values,
  selected,
  onSelect,
}: OptionProps) {
  const refs: MutableRefObject<HTMLDivElement[]> = useRef<HTMLDivElement[]>([]);

  const optionCSS: CSSObject = {
    backgroundColor: `white`,
    minHeight: `32px`,
    paddingLeft: `8px`,
    cursor: `pointer`,
    outline: `none`,
    ':hover': {
      backgroundColor: `#F3F4F8`,
    },
    css,
  };

  useEffect(() => {
    const index = values.indexOf(selected);
    if (index !== -1) refs.current[index].focus();
    else refs.current[0].focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      {values.map((option: string, idx: number) => (
        <FlexView
          key={option}
          ref={(e: HTMLDivElement) => (refs.current[idx] = e)}
          contents="center"
          css={{
            ...optionCSS,
            ...(idx === 0 && { borderRadius: `4px 4px 0 0` }),
            ...(idx === values.length - 1 && { borderRadius: `0 0 4px 4px` }),
          }}
          items={center ? `center` : `start`}
          tabIndex={0}
          onBlur={() => (refs.current[idx].style.backgroundColor = `#FFF`)}
          onClick={() => onSelect(idx)}
          onFocus={() => (refs.current[idx].style.backgroundColor = `#F3F4F8`)}
          onKeyDown={e => {
            if (e.key === `Enter`) onSelect(idx);
            else if (e.key === `ArrowDown`) {
              (refs.current[idx].nextElementSibling as HTMLElement)?.focus();
            } else if (e.key === `ArrowUp`) {
              (
                refs.current[idx].previousElementSibling as HTMLElement
              )?.focus();
            } else {
              e.preventDefault();
            }
          }}
        >
          <Text color="#4D4D4D" small>
            {option}
          </Text>
        </FlexView>
      ))}
    </>
  );
}
