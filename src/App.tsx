/* eslint-disable no-underscore-dangle */
import { Anchor } from '@components/Common';
import { useState, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

const BASIC = import.meta.globEager(`/src/pages/404.tsx`);
const COMPONENTS: Record<string, { [key: string]: any }> =
  import.meta.globEager(`/src/pages/**/[a-z[]*.tsx`);

const basics = Object.keys(BASIC).reduce((basic, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, ``);
  return { [key]: BASIC[file].default };
}, {});

const components = Object.keys(COMPONENTS).map(component => {
  const path = component
    .replace(/\/src\/pages|index|\.tsx$/g, ``)
    .replace(/\[\.{3}.+\]/, `*`)
    .replace(/\[(.+)\]/, `:$1`);

  return { path, component: COMPONENTS[component].default };
});

export default () => {
  const a = 1;

  return (
    <Routes>
      {components.map(({ path, component: Component = Fragment }) => (
        <Route key={path} element={Component()} path={path} />
      ))}
    </Routes>
  );
};
