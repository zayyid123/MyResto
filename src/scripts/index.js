/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime'; /* for async await transpile */
// component
import './component/com_contentSkip.js';
import './component/com_navbar.js';
import './component/com_buttonUp.js';
import './component/com_card.js';
import './component/com_footer.js';
import './component/com_hero.js';
import './component/com_info.js';
import './component/com_resto.js';
import './component/com_favorit.js';
import './component/com_detail';
import './component/com_loading';

// scss
import '../styles/favorite.scss';
import '../styles/style.scss';
import '../styles/hero.scss';
import '../styles/responsive.scss';
import '../styles/detail.scss';

// utilitas
import drawer from './utils/nav_drawer.js';
import App from './view/app.js';
import buttonUp from './utils/button_up.js';
import swRegister from './utils/sw-register.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  buttonUp();
  drawer.play();
  app.renderPage();
  swRegister();
});
