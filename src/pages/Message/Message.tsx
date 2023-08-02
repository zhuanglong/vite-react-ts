import { Button } from 'antd-mobile';

import { useCounterStore } from '@/stores';

import './Message.scss';

export default function Message() {
  const { count, decrease, increase } = useCounterStore((state) => state);

  return (
    <div className="Message-page">
      <h1 className="title">Message</h1>
      <div className="counter">
        Counter：
        <Button size="small" onClick={decrease}>
          -
        </Button>
        <span className="number">{count}</span>
        <Button size="small" onClick={increase}>
          +
        </Button>
      </div>
    </div>
  );
}
