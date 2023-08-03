import { wrapPromise } from '@/utils';
import { getRandomColor } from '@/api/testApi';

import styles from './Home.module.scss';

const wrapPromiseData = wrapPromise(getRandomColor());

export default function Home() {
  const data = wrapPromiseData.read();

  return (
    <div className={styles['Home-page']}>
      <h1 className="title" style={{ color: data }}>
        Home
      </h1>
    </div>
  );
}
