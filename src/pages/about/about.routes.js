import {AboutPage} from './about.page';
import aboutLoader from './about.loader';

export default () => [
  {
    path: '',
    element: <AboutPage />,
    loader: aboutLoader,
  },
];
