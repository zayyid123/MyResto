import home from '../view/pages/home';
import favorite from '../view/pages/favorite';
import detail from '../view/pages/detail';

const routes = {
  '/': home, // default page
  '/home': home,
  '/favorite': favorite,
  '/detail/:id': detail,
};

export default routes;
