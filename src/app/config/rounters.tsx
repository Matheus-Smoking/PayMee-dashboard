import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard';
import ErrorPage from '../pages/error';
import Login from '../pages/login';
import { withAuth } from './with-auth';

const DashBoardProtected = withAuth(Dashboard);

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <DashBoardProtected />,
  },
]);
