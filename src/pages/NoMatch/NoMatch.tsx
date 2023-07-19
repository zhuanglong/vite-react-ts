import { Link } from 'react-router-dom';

import './style.scss';

export default function NoMatch() {
  return (
    <div className="NoMatch-page">
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
