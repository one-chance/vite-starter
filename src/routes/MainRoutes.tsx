import Home from '@pages/Home';
import NoMatch from '@pages/NoMatch';
import { Route, Routes } from 'react-router-dom';

export default () => {
  const a = 1;

  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<NoMatch />} path="*" />
    </Routes>
  );
};
