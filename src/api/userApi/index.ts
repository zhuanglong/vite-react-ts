import { httpClient, ApiResult } from '@/utils/request';
import { getAppInfo } from '@/utils/appEnv';

import { LoginParams, LogoutData, UserInfo } from './types';

const { apiPrefix } = getAppInfo();

export function login(params: LoginParams) {
  return httpClient.post<ApiResult<UserInfo>>(`${apiPrefix}/user/login`, params);
}

export function logout() {
  return httpClient.post<ApiResult<LogoutData>>(`${apiPrefix}/user/logout`);
}
