import { useNavigate } from 'react-router-dom';
import { Button } from 'antd-mobile';

import { useAuth } from '@/router/AuthContext';

import './Mine.scss';

export default function About() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const gotoLogin = () => {
    navigate('/login');
  };

  const signOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="Mine-page">
      <h1 className="title">Mine</h1>
      {isLoggedIn ? (
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
