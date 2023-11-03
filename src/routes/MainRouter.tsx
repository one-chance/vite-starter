import { Route, Routes } from 'react-router-dom';

import { HomePage, NoMatchPage } from '@pages/index';

const MainRouter = () => (
  <main>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<NoMatchPage />} path="*" />
    </Routes>
  </main>
);

export default MainRouter;
