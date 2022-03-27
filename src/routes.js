import  Login  from './pages/Login.jsx';
import  Signup  from './pages/Signup.jsx';
import { About } from './pages/About.jsx';

export const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/about',
    component: About,
  },
];
