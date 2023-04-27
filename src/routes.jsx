import { createBrowserRouter } from 'react-router-dom';
import UserInfo from './components/UserInfo/UserInfo';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/github-user-search-app/',
        element: <UserInfo />,
      },
      {
        path: '/github-user-search-app/:username',
        element: <UserInfo />,
      },
    ],
  },
]);
