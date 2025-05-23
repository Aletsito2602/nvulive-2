import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const userData = localStorage.getItem('nvuUserData');
    if (!userData) {
      navigate('/login', { replace: true, state: { from: location } });
    }
  }, [navigate, location]);
  const userData = localStorage.getItem('nvuUserData');
  if (!userData) return null;
  return children;
} 