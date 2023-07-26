import { BrowserRouter } from 'react-router-dom';

import { RouteElement } from '@/router';
import { AuthProvider } from '@/router/AuthContext';

import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RouteElement />
      </BrowserRouter>
    </AuthProvider>
  );
}
