import { httpClient } from '@/utils/request';

import { IPInfo } from './types';

export function getIP() {
  return httpClient.get<IPInfo>('http://ip-api.com/json');
}
