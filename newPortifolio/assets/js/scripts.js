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
    strings: ['FullStack Deseloaper', 'Web Site Deseloaper ', 'Mobile Deseloaper', 'React js e React-Native'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


