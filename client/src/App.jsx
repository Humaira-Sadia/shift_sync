import React from 'react';
import { ConfigProvider } from 'antd';
import { ANTD_TOKEN } from './utils';
import Navigation from './navigation';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: ANTD_TOKEN
      }}
    >
      <Navigation />
    </ConfigProvider>
  );
};

export default App;
