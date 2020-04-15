//Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const ulNavMenu = document.querySelector('.ul-nav-menu');
const menuBranding = document.querySelector('.menu-branding');

const navItem = document.querySelectorAll('.li-nav-item');

//Set Initial State Of Menu
let showMenu = false;
menuBtn.addEventListener('click', toogleMenu);

function toogleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        navMenu.classList.add('show');
        ulNavMenu.classList.add('show');
        menuBranding.classList.add('show');

        navItem.forEach(item=> item.classList.add('show'));
        
        //Set Menu State
        showMenu = true;
    }else{
         menuBtn.classList.remove('close');
        navMenu.classList.remove('show');
        ulNavMenu.classList.remove('show');
        menuBranding.classList.remove('show');

        navItem.forEach(item=> item.classList.remove('show'));
        
        showMenu = false;
    }
}