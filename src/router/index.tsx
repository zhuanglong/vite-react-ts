import React, { lazy, Suspense } from 'react';
import { RouteObject, Routes, Route, useLocation } from 'react-router-dom';

import Skeleton from '@/components/Skeleton';

import RequireAuth from './RequireAuth';
import PageTitle from './PageTitle';

import MainLayout from '@/layouts/MainLayout';
import NotFound from '@/pages/NotFound/NotFound';
import Login from '@/pages/Login/Login';
const Home = lazy(() => import('@/pages/Home/Home'));
const Message = lazy(() => import('@/pages/Message/Message'));
const Mine = lazy(() => import('@/pages/Mine/Mine'));

// import Home from '@/pages/Home/Home';

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

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        meta: {
          title: 'Home',
        },
        element: <Home />,
      },
      {
        path: '/message',
        meta: {
          title: 'Message',
          requireAuth: true,
        },
        element: <Message />,
      },
      {
        path: '/mine',
        meta: {
          title: 'Mine',
        },
        element: <Mine />,
      },
    ],
  },
  {
    path: '/login',
    meta: {
      title: 'Login',
    },
    element: <Login />,
  },
  {
    path: '/*',
    meta: {
      title: 'Not Found',
    },
    element: <NotFound />,
  },
];

function adaptRoute(routes: RouteObject[]) {
  return routes.map((route, key) => {
    const { meta, element, ...rest } = route;

    // @ts-ignore
    const isLazyLoad = typeof element?.type === 'object';

    const authElement = meta?.requireAuth ? <RequireAuth>{element}</RequireAuth> : element;
    const lazyElement = isLazyLoad ? (
      <Suspense fallback={<Skeleton />}>{authElement}</Suspense>
    ) : (
      authElement
    );

    return (
      // @ts-ignore
      <Route key={key} {...rest} element={<PageTitle title={meta?.title}>{lazyElement}</PageTitle>}>
        {route.children && adaptRoute(route.children)}
      </Route>
    );
  });
}

export function RouteElement() {
  const location = useLocation();

  React.useEffect(() => {
    // 路由切换钩子
  }, [location]);

  return <Routes>{adaptRoute(routeConfig)}</Routes>;
}
