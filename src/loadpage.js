const LoadPage = (() => {
    const content = document.querySelector('#content');
    
    const loadLayout = (image) => {
        let layout = document.createElement('div');
        layout.innerHTML = `<div id="layout">
                                <img src="${image}" alt="fogão a lenha">
                                <h1 id="header">Forno de Casa</h1>
                            </div>`;
        content.appendChild(layout);
    };

    const loadNavBar = () => {
        let navBar = document.createElement('div');
        navBar.innerHTML = `<div id="navBar"> 
                                <ul>
                                    <li class="navBarItem"><button id="btnTab1">Início</button></li>
                                    <li class="navBarItem"><button id="btnTab2">Menu</button></li>
                                    <li class="navBarItem"><button id="btnTab3">Contato</button></li>
                                </ul>
                            </div>`;
        content.appendChild(navBar);
    };


    const loadMain = (pageContent) => {
        let main = document.createElement('div');
        main.innerHTML = pageContent;
        content.appendChild(main);
    };

    const loadFooter = () => {
        let footer = document.createElement('div');
        footer.innerHTML = `<div id="footer">@Copyright: Forno de Casa Ltda.</div>`;
        content.appendChild(footer);
    };

    return {content, loadLayout, loadNavBar,loadMain, loadFooter};
})();

export default LoadPage;