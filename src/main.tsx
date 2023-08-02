// 全局样式
import './design/normalize.css';
import './design/global.scss';

// 移动端适应，手动转换 rem
import './design/flexible/flexible.js';

// antd-mobile 的公共样式
import 'antd-mobile/es/global';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { isProdMode } from '@/utils/appEnv.ts';

// MockData
import { setupProdMockServer } from '../mock/_createProductionServer';
if (isProdMode()) {
  setupProdMockServer();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
