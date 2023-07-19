import { Link } from 'react-router-dom';

import './style.scss';

export default function Login() {
  return (
    <div className="Login-page">
      <h1>请登录!</h1>
      <p>
        <Link to="/" replace>
          模拟登录成功
        </Link>
      </p>
    </div>
  );
}
