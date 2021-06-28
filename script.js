const abrirMobile = document.querySelector('.abrir-mobile');
const fecharMobile = document.querySelector('.fechar-mobile');
const menuMobile = document.querySelector('.menu-mobile');
const cliqueFora = document.querySelector('.clique-fora');
const infos = document.querySelector('.infos');

const ativarSubMenu = document.querySelector('.ativar-submenu');
const subMenu = document.querySelector('.submenu');
const manterSubMenu = document.querySelector('.submenumanter');

menuMobile.style.display = 'none';


function abrirMenuMobile(){
  abrirMobile.style.display = 'none';
  fecharMobile.style.display = 'block';
  menuMobile.style.display = 'flex';
  cliqueFora.style.display = 'block';
  cliqueFora.style.visibility = 'visible';
  menuMobile.classList.add('menu-mobile');
}

function fecharMenuMobile(){
  menuMobile.style.display = 'none';
  fecharMobile.style.display = 'none';
  abrirMobile.style.display = 'block';
  cliqueFora.style.display = 'none';
}

abrirMobile.addEventListener('click', abrirMenuMobile);;
fecharMobile.addEventListener('click', fecharMenuMobile);
cliqueFora.addEventListener('click', fecharMenuMobile);

var links = document.querySelectorAll('section[id^="contato"]');
                                       /*a[href^="http:"]*/





