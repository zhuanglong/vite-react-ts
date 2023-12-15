import React, { lazy } from 'react';
import { RouteObject, HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import Guard from './Guard';

import MainLayout from '@/layouts/MainLayout';
import NotFound from '@/pages/NotFound/NotFound';
import Login from '@/pages/Login/Login';
const Home = lazy(() => import('@/pages/Home/Home'));
const Message = lazy(() => import('@/pages/Message/Message'));
const Mine = lazy(() => import('@/pages/Mine/Mine'));
const AssetsDemo = lazy(() => import('@/pages/AessetDemo/AssetsDemo'));

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
    path: '/assets-demo',
    meta: {
      title: 'Assets Demo',
    },
    element: <AssetsDemo />,
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
    return (
      // @ts-ignore
      <Route key={key} path={route.path} element={<Guard route={route} />}>
        {route.children && adaptRoute(route.children)}
      </Route>
    );
  });
}

// 这里包一层为了做路由切换钩子
function RouteElement() {
  const location = useLocation();

  React.useEffect(() => {
    // 路由变化
  }, [location]);

  return <Routes>{adaptRoute(routeConfig)}</Routes>;
}

export function AppRouter() {
  return (
    <HashRouter>
      <RouteElement />
    </HashRouter>
  );
}
