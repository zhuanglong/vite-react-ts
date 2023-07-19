import { lazy } from 'react';
import { createHashRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import NoMatch from '@/pages/NoMatch/NoMatch';
import Login from '@/pages/Login/Login';
import Home from '@/pages/Home/Home';
import Message from '@/pages/Message/Message';
import Mine from '@/pages/Mine/Mine';

// const Home = lazy(() => import('@/pages/Home/Home'));
// const Message = lazy(() => import('@/pages/Message/Message'));
// const Mine = lazy(() => import('@/pages/Mine/Mine'));

// 延时模拟
// import HomeC from '@/pages/Home/Home';
// const Home = lazy(async () => {
//   return new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve({
//         default: HomeC,
//       });
//     }, 2000);
//   });
// });

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'message',
        element: <Message />,
      },
      {
        path: 'mine',
        element: <Mine />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
]);

export default router;
