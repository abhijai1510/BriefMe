import { Link, useLocation } from 'react-router-dom';

const BackButton = () => {
  const location = useLocation();

  // Hide Back Button on the Home Page
  if (location.pathname === '/') return null;

  return (
    <Link to="/" className="back_btn">
      ⬅ Back
    </Link>
  );
};

export default BackButton;
