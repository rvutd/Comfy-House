// Variables -
const navIcon = document.querySelector('.nav-icon');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');

// Opens Menu Bar
navIcon.addEventListener('click', (e)=>{
    menu.classList.add('showMenu');
    menu.classList.add('transparentMenu');
});

// Closees Menu Bar
closeMenu.addEventListener('click', (e)=>{
    menu.classList.remove('showMenu');
    menu.classList.remove('transparentMenu');
});

