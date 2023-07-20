import { sleep, wrapPromise } from '@/utils';
import styles from './Home.module.scss';

const fetchFakeData = async () => {
  try {
    await sleep(2000);
    return { code: 0, data: 'Apple', message: 'success' };
  } catch (error) {
    throw error;
  }
};

const wrapPromiseData = wrapPromise(fetchFakeData());

export default function Home() {
  const data = wrapPromiseData.read();

  return (
    <div className={styles['Home-page']}>
      <h1 className="title">Home</h1>
      <div className="content">
        Fetch fake data: <br />
        {JSON.stringify(data)}
      </div>
    </div>
  );
}
