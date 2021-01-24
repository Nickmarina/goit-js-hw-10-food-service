import itemsTemplate from '../templates/items.hbs';
import menu from '../menu.json';

const menuItemsRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menu);

menuItemsRef.insertAdjacentHTML('beforeend', markup);
