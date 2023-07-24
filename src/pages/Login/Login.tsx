import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Button } from 'antd-mobile';

import { useAuth } from '@/router/AuthContext';

import './Login.scss';

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const from = location.state?.from?.pathname || -1;

  function signIn() {
    setIsLoggedIn(true);
    navigate(from);
  }

  if (isLoggedIn) {
    return <Navigate to="/" />;
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
