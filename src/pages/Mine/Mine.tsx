import { useNavigate } from 'react-router-dom';
import { Button, Toast } from 'antd-mobile';

import { useCounterStore, useUserInfoStore } from '@/stores';
import * as userApi from '@/api/userApi';

import './Mine.scss';

export default function About() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useUserInfoStore();
  const { count } = useCounterStore((state) => state);

  const gotoLogin = () => {
    navigate('/login');
  };

  async function signOut() {
    Toast.show({
      icon: 'loading',
      content: 'signOut…',
      maskClickable: false,
    });
    try {
      const res = await userApi.logout();
      if (res.code === 0) {
        Toast.clear();
        setUserInfo(null);
      } else {
        Toast.show({
          icon: 'fail',
          content: 'signOut error',
        });
      }
    } catch (error) {
      Toast.clear();
    }
  }

  return (
    <div className="Mine-page">
      <h1 className="title">Mine</h1>
      <h3 className="counter">Counter: {count}</h3>
      {userInfo ? (
        <Button className="btn" onClick={signOut}>
          Sign out
        </Button>
      ) : (
        <Button className="btn" onClick={gotoLogin}>
          Go to login page
        </Button>
      )}
    </div>
  );
}
