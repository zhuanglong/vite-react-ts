import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

import { useGetRandomColor } from '@/api/testApi';
import styles from './Home.module.scss';

export default function Home() {
  const navigate = useNavigate();
  const { data, mutate } = useGetRandomColor();

  const refresh = () => mutate();

  return (
    <div className={styles['Home-page']}>
      <h1 className="title" style={{ color: data }} onClick={refresh}>
        Home
      </h1>
      <Button style={{ margin: '20px' }} onClick={() => navigate('/assets-demo')}>
        Assets demo page
      </Button>
    </div>
  );
}
