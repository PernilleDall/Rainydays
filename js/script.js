let menu = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fas fa-bars');
    navbar.classList.toggle('open');
}