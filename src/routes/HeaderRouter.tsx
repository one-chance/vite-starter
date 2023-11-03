import { Route, Routes } from 'react-router-dom';

import { Header } from '@components/layout';

const HeaderRouter = () => (
  <Routes>
    <Route element={<Header />} path="/*" />
  </Routes>
);

export default HeaderRouter;
