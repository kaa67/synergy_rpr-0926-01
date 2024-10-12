import { Navigate, useRoutes } from 'react-router';
import { routes } from './routes';
import NotFound from 'pages/NotFound';

const Routing = () => {
  const preparedRoutes = [
    ...routes.map(
      ({ path, component: CurrentComponent }) => ({
        path,
        element: <CurrentComponent />,
      })
    ),
    { path: '/', element: <Navigate to="/main" /> },
    { path: '*', element: <NotFound /> },
  ];

  return useRoutes(preparedRoutes);
};

export default Routing;
