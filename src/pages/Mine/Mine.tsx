import { useNavigate } from 'react-router-dom';
import { Button } from 'antd-mobile';

import './Mine.scss';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="Mine-page">
      <h1 className="title">Mine</h1>
      <Button className="login-btn" onClick={() => navigate('/login')}>
        go to login
      </Button>
    </div>
  );
}
