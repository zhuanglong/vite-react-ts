import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Button, Toast } from 'antd-mobile';

import { useUserInfoStore } from '@/stores';
import * as userApi from '@/api/userApi';

import './Login.scss';

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setUserInfo } = useUserInfoStore((state) => state);

  const path = searchParams.get('redirect') || location.state?.from?.pathname || -1;

  async function signIn() {
    Toast.show({
      icon: 'loading',
      content: 'signin…',
      maskClickable: false,
    });
    try {
      const res = await userApi.login({ username: 'Tom', password: '123456' });
      if (res.code === 0) {
        Toast.clear();
        setUserInfo(res.data);
        navigate(path);
      } else {
        Toast.show({
          icon: 'fail',
          content: 'signIn error',
        });
      }
    } catch (error) {
      Toast.clear();
    }
  }

  return (
    <div className="Login-page">
      <h1>Sign in to X</h1>
      <p>
        <Button color="primary" onClick={signIn}>
          Fake sign in
        </Button>
      </p>
    </div>
  );
}
