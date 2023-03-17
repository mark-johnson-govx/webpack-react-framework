import App from '@/app';
import {HomePage} from './home/home.page';
import homeLoader from './home/home.loader';
import aboutRoutes from './about/about.routes';

export const createRoutes = () => [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: '/about',
        children: aboutRoutes(),
      },
    ],
  },
];
