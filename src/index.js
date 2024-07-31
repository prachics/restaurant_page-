import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

console.log('Webpack is bundling this project correctly!');

function initialize() {
  const homeButton = document.getElementById('homeBtn');
  const menuButton = document.getElementById('menuBtn');
  const contactButton = document.getElementById('aboutBtn');

  homeButton.addEventListener('click', loadHome);
  menuButton.addEventListener('click', loadMenu);
  contactButton.addEventListener('click', loadContact);

  // Load the home page by default
  loadHome();
}

initialize();
