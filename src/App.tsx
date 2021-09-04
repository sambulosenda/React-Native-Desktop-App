// src/App.tsx

import React from 'react';
import {Books} from 'containers';
import {root, StoreProvider} from 'Store';

export const App = () => {
  return (
    <StoreProvider value={root}>
      <Books />
    </StoreProvider>
  );
};