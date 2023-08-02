import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { UserInfo } from '@/api/userApi/types';

interface UserInfoState {
  userInfo: UserInfo | null;
  setUserInfo: (info: UserInfoState['userInfo']) => void;
}

const useUserInfoStore = create<UserInfoState>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => set(() => ({ userInfo })),
    }),
    { name: 'userInfo' },
  ),
);

export default useUserInfoStore;
