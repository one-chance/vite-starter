import { Route, Routes } from 'react-router-dom';

import { Footer } from '@components/layout';

const FooterRouter = () => (
  <Routes>
    <Route element={<Footer />} path="/*" />
  </Routes>
);

export default FooterRouter;
