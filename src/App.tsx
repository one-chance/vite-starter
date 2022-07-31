import { Anchor } from '@components/Common';
import { useState } from 'react';

import logo from './logo.svg';

import './App.css';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <img alt="logo" className="App-logo" src={logo} />
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount(count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>

      <Anchor
        className="App-link"
        href="https://vitejs.dev/guide/features.html"
        rel="noreferrer noopener"
        target="_blank"
      >
        Vite Docs
      </Anchor>
    </>
  );
};
