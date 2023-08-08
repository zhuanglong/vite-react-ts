import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ResUserInfo } from '@/api/userApi/types';

interface UserInfoState {
  userInfo: ResUserInfo | null;
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
