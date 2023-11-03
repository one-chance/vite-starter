import { useTranslation } from 'react-i18next';

import { FlexView, Text, Link } from '@components/shared';

export default function Header() {
  const [t] = useTranslation(`header`);

  return (
    <header>
      <FlexView
        content="between"
        css={{
          height: `3rem`,
          padding: `0 10%`,
          boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`,
        }}
        items="center"
        row
      >
        <Link to="/">
          <Text>{t(`title`)}</Text>
        </Link>
      </FlexView>
    </header>
  );
}
