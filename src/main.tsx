// 全局样式
import './design/normalize.css';
import './design/global.scss';

// 移动端适应，手动转换 rem
import './design/flexible/flexible.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);