// swiper
var swiper = new Swiper(".home", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    if(navbar.classList.contains("none")){
        navbar.classList.remove('none');
        menu.classList.replace('bx-menu','bx-x');
        }else{
        navbar.classList.add('none');
        menu.classList.replace('bx-x','bx-menu');
    }
    // menu.classlist.toggle('bx-x');
    // navbar.classlist.toggle('navbar');
}

window.onscroll = () => {
    menu.classlist.remove('bx-x');
    navbar.classlist.remove('navbar');
}

let body = document.querySelector('body');
let home = document.querySelector('.home');
let categories = document.querySelector('.categories');
let products = document.querySelector('.products');
let about = document.querySelector('.about');
let customers = document.querySelector('.customers');
let footer = document.querySelector('.footer');
let mode = document.querySelector('#farha');
let anything1 = document.querySelector('.anything1');
let anything2= document.querySelector('.anything2');
let anything3= document.querySelector('.anything3');

mode.onclick = () => {
    body.classList.toggle('dark-mode');
    home.classList.toggle('dark-mode');
    // anything.classList.toggle('dark-mode');
    categories.classList.toggle('dark-mode');
    products.classList.toggle('dark-mode');
    about.classList.toggle('dark-mode');
    customers.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    mode.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')){
        var newimg = "https://img.freepik.com/free-photo/crumpled-black-paper-texture_1194-6941.jpg?t=st=1729039457~exp=1729043057~hmac=d514afebd8d4b29729fed992626c903889f7ef5d15ad3a904840d2f79348d284&w=740"
        anything1.style.backgroundImage = `url('${newimg}')` ;
        anything2.style.backgroundImage = `url('${newimg}')` ;
        anything3.style.backgroundImage = `url('${newimg}')` ;
        mode.classList.replace('bxs-moon','bxs-sun');
    }else{
        mode.classList.replace('bxs-sun','bxs-moon');
        var newimg1 = "https://img.freepik.com/free-photo/white-paper-texture_1194-5416.jpg?t=st=1729042231~exp=1729045831~hmac=6a925a3fa10a0933927a0060395d7da087a09b00ea0af7c4ae72af11ec0f108c&w=826";
        anything1.style.backgroundImage = `url('${newimg1}')` ;
        anything2.style.backgroundImage = `url('${newimg1}')` ;
        anything3.style.backgroundImage = `url('${newimg1}')` ;
    }
} 
