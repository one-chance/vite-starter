import { css } from '@emotion/react';

import { FlexView, Text } from '@components/shared';

export default function HomePage() {
  return (
    <FlexView>
      <Text>123</Text>

      <div
        css={css({
          backgroundColor: `red`,
        })}
      >
        123
      </div>
    </FlexView>
  );
}
