export interface LoginParams {
  username: string;
  password: string;
}

export type LogoutInfo = null;

export interface UserInfo {
  token: string;
  date: string;
  username: string;
  avatar: string;
  gender: 0 | 1;
  country: string;
  province: string;
}
