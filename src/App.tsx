import { BrowserRouter } from 'react-router-dom';

import { RouteElement } from '@/router';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <RouteElement />
    </BrowserRouter>
  );
}
