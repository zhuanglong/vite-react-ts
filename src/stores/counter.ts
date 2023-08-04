import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import counterStorage from '@/storages/counterStorage';

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const useCounterStore = create<CounterState>()(
  subscribeWithSelector((set) => ({
    count: counterStorage.getItem(),
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
  })),
);

const unsubscribe = useCounterStore.subscribe(
  (state) => state.count,
  (count, previousCount) => {
    console.log(count);
    counterStorage.setItem(count);
  },
  {
    fireImmediately: true,
  },
);

// setTimeout(() => {
//   unsubscribe(); // 卸载监听
// }, 8000);

export default useCounterStore;
