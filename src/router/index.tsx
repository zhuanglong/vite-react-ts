import { lazy, Suspense } from 'react';
import { createHashRouter } from 'react-router-dom';

import Skeleton from '@/components/Skeleton';

import MainLayout from '@/layouts/MainLayout';
import NoFound from '@/pages/NoFound/NoFound';
import Login from '@/pages/Login/Login';
// import Home from '@/pages/Home/Home';
// import Message from '@/pages/Message/Message';
// import Mine from '@/pages/Mine/Mine';

const Home = lazy(() => import('@/pages/Home/Home'));
const Message = lazy(() => import('@/pages/Message/Message'));
const Mine = lazy(() => import('@/pages/Mine/Mine'));

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
        element: (
          <Suspense fallback={<Skeleton />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'message',
        element: (
          <Suspense fallback={<Skeleton />}>
            <Message />
          </Suspense>
        ),
      },
      {
        path: 'mine',
        element: (
          <Suspense fallback={<Skeleton />}>
            <Mine />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NoFound />,
  },
]);

export default router;
