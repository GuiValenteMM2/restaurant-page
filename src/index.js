import './style.css';
import loadPage from './loadpage.js';
import backgroundImg from './images/fogaoalenha2.jpg';
import mainContentInicio from './inicio.js';
import mainContentContato  from './contato.js';
import mainContentMenu from './menu.js';

loadPage.loadHeader(backgroundImg);
loadPage.loadNavBar();
loadPage.loadMain(mainContentInicio.tabContent);
loadPage.loadMain(mainContentMenu.tabContent);
loadPage.loadMain(mainContentContato.tabContent);
loadPage.loadFooter();

const tabSwitch = function(show, hide1, hide2) {
    show.classList.add('hidden');
    hide1.classList.add('hidden');
    hide2.classList.add('hidden');
    show.classList.remove('hidden');
};

const inTab = document.querySelector('#inTabContent');
const menuTab = document.querySelector('#menuTabContent');
const cttTab = document.querySelector('#cttTabContent');

const buttonIn = document.querySelector('#btnTab1');
buttonIn.addEventListener('click', () => tabSwitch(inTab, menuTab, cttTab));

const buttonMn = document.querySelector('#btnTab2');
buttonMn.addEventListener('click', () => tabSwitch(menuTab, cttTab, inTab));

const buttonCt = document.querySelector('#btnTab3');
buttonCt.addEventListener('click', () => tabSwitch(cttTab, inTab, menuTab));



