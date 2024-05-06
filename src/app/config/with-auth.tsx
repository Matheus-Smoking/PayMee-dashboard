import { useSelector } from 'react-redux';
import { selectorAccesToken } from 'src/features/auth/auth-slice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Redirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login', { replace: true });
  }, []);
  return undefined;
}

export function withAuth(
  Component: (props: Record<string, unknown>) => JSX.Element
) {
  return (props: Record<string, unknown>) => {
    const accesToken = useSelector(selectorAccesToken);
    if (!accesToken) return <Redirect />;
    return <Component {...props} />;
  };
}
