import { Link } from 'react-router-dom';

import './NotFound.scss';

export default function NotFound() {
  return (
    <div className="NotFound-page">
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
