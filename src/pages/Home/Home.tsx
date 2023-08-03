import { useGetRandomColor } from '@/api/testApi';
import styles from './Home.module.scss';

export default function Home() {
  const { data, mutate } = useGetRandomColor();

  const refresh = () => mutate();

  return (
    <div className={styles['Home-page']}>
      <h1 className="title" style={{ color: data }} onClick={refresh}>
        Home
      </h1>
    </div>
  );
}
