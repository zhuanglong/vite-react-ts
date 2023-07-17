import { createHashRouter, Navigate } from 'react-router-dom';

import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate replace to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default router;
