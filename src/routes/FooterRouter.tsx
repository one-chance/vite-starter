import { FlexView, Text } from '@components/Common';
import { Route, Routes } from 'react-router-dom';

const Footer = () => (
  <FlexView
    content="between"
    css={{
      width: `100%`,
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
);

export default () => (
  <Routes>
    <Route element={<Footer />} path="/*" />
  </Routes>
);
