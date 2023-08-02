import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useUserInfoStore } from '@/stores';

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { userInfo } = useUserInfoStore();
  const location = useLocation();

  if (!userInfo) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
