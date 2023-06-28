import { Route, Routes } from 'react-router-dom';

import MainRoutes from './MainRoutes';

export default () => (
  <main>
    <Routes>
      <MainRoutes />
      {/* {Object.entries(MainRoutes).map(([key, value]) => (
        <Route key={key} {...value} />
      ))} */}
    </Routes>
  </main>
);
