import { Header } from '@components/Layout';
import { Route, Routes } from 'react-router-dom';

export default () => (
  <Routes>
    <Route element={<Header />} path="/*" />
  </Routes>
);
