import './style.css';
import loadPage from './loadpage.js';
import backgroundImg from './images/backgroundimg.jpeg';
import mainContentInicio from './inicio.js';
import mainContentContato  from './contato.js';
import mainContentMenu from './menu.js';

loadPage.loadLayout(backgroundImg);
loadPage.loadNavBar();
loadPage.loadMain(mainContentInicio.tabContent);
loadPage.loadFooter();

const inicioBtn = document.querySelector('#tab1');
if (inicioBtn) {
    inicioBtn.addEventListener('click', () => loadPage.loadMain(mainContentInicio.tabContent));
};

const menuBtn = document.querySelector('#tab2');
if (menuBtn) {
    menuBtn.addEventListener('click', () => loadPage.loadMain(mainContentMenu.tabContent));
};

const contatoBtn = document.querySelector('#tab3');
if (contatoBtn) {
    contatoBtn.addEventListener('click', () => loadPage.loadMain(mainContentContato.tabContent));
};
