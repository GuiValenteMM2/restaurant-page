import bambaImg from './images/menu/bamba.jpeg';
import feijaoTrop from './images/menu/feijaotrop.jpeg';
import frangoQuiabo from './images/menu/frangoquiabo.jpeg';
import leitao from './images/menu/leitao.jpeg';
import tutu from './images/menu/tutu.jpeg';
import vacaAtolada from './images/menu/vacaatolada.jpeg';

const mainContentMenu = (() => {
    let tabContent = `<div id="menuTabContent" class="hidden">
                       <div class="menuItem"><h4 class="menuItemName"> Bambá de Couve
                       </h4> <img src="${bambaImg}" alt="Bambá de Couve"> </div>
                       <div class="menuItem"><h4 class="menuItemName"> Feijão Tropeiro
                       </h4> <img src="${feijaoTrop}" alt="Feijão Tropeiro"> </div>
                       <div class="menuItem"><h4 class="menuItemName"> Frango com Quiabo
                       </h4> <img src="${frangoQuiabo}" alt="Frango com Quiabo"> </div>
                       <div class="menuItem"><h4 class="menuItemName"> Leitão à Pururuca
                       </h4> <img src="${leitao}" alt="Leitão à Pururuca"> </div>
                       <div class="menuItem"><h4 class="menuItemName"> Tutu à Mineira
                       </h4> <img src="${tutu}" alt="Tutu à Mineira"> </div>
                       <div class="menuItem"><h4 class="menuItemName"> Vaca Atolada
                       </h4> <img src="${vacaAtolada}" alt="Vaca Atolada"> </div>
                   </div>`;
    return {tabContent};
})();

export default mainContentMenu;