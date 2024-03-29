import { FlexView, Text } from '@components/shared';

export default function Footer() {
  return (
    <footer>
      <FlexView
        content="between"
        css={{
          height: `3rem`,
          borderTop: `1px solid #D5D5D5`,
          backgroundColor: `#22252C`,
          padding: `0 10%`,
        }}
        items="center"
        row
      >
        <Text color="white">Footer</Text>
      </FlexView>
    </footer>
  );
}
