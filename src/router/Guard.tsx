import React, { Suspense } from 'react';
import { Navigate, useLocation, RouteObject } from 'react-router-dom';

import Skeleton from '@/components/Skeleton';
import { useUserInfoStore } from '@/stores';

interface RouteGuardProps {
  route: RouteObject;
  children?: React.ReactNode;
}

export default function Guard({ route }: RouteGuardProps) {
  changePageTitle(route);
  return (
    <PermissionGuard route={route}>
      <LazyGuard route={route} />
    </PermissionGuard>
  );
}

// 动态修改页面标题
function changePageTitle(route: RouteObject) {
  document.title = route.meta?.title || '';
}

// 路由按需加载
function LazyGuard({ route }: RouteGuardProps) {
  const { element } = route;

  // @ts-ignore
  const isLazyLoad = typeof element?.type === 'object';

  return isLazyLoad ? <Suspense fallback={<Skeleton />}>{element}</Suspense> : element;
}

// 路由拦截
function PermissionGuard({ route, children }: RouteGuardProps) {
  const { meta } = route;

  const location = useLocation();
  const { userInfo } = useUserInfoStore();

  if (meta?.requireAuth && !userInfo) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
