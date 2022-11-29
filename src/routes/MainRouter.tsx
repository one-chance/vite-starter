import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

export default () => {
  const COMPONENTS = import.meta.globEager(`/src/pages/**/[a-z[]*.tsx`);

  const components = Object.keys(COMPONENTS).map(component => {
    const path = component
      .replace(/\/src\/pages|index|\.tsx$/g, ``)
      .replace(/\[\.{3}.+\]/, `*`)
      .replace(/\[(.+)\]/, `:$1`);

    return { path, component: COMPONENTS[component].default };
  });

  return (
    <Routes>
      {components.map(({ path, component: Component = Fragment }) => (
        <Route key={path} element={Component} path={path} />
      ))}
    </Routes>
  );
};
