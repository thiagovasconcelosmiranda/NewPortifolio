AOS.init();

//Option navbar mobile
let url = document.getElementById('option-ul');
let checkOoption = document.getElementById('check-option');

checkOoption.addEventListener('click', ()=>{
    
    if(checkOoption.checked){
       url.classList.add('url-mobile');
       url.classList.add('navbar-off');
    }else{
        url.classList.remove('url-mobile');
    }
});


//typed js

const typed = new Typed('.multiple-text', {
    strings: ['FullStack', 'Web Sites', 'Aplicativos Mobile', 'UI e dsigner'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


//Scroll

        
//efeito scroll de rolagem
const menuItems = document.querySelectorAll('.nav-links li a');
menuItems.forEach(item =>{
  item.addEventListener('click', scrollToIdOnClick);
});

function getScrollTopByHref(element){
     const id = element.getAttribute('href');
     return document.querySelector(id).offsetTop;
 }

function scrollToIdOnClick (event){
   event.preventDefault();
   const to  = getScrollTopByHref(event.target)-70;
   scrollToposition(to);
 }
 
 function scrollToposition(to){
   window.scroll({
      top: to,
      behavior: "smooth"
   });
  }



