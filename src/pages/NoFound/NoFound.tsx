import { Link } from 'react-router-dom';

import './NoFound.scss';

export default function NoFound() {
  return (
    <div className="NoFound-page">
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
