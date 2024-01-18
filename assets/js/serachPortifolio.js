
let cards = document.querySelector('.cards-portifolio');

let listPortifolio = [
    {
        id: 1,
        img: 'assets/images/medicenter.png',
        title: 'Web Site',
        type: ['Todos', 'Websites']
    },
    {
        id: 2,
        img: 'assets/images/imobiliaria.png',
        title: 'Web Site',
        type: ['Todos', 'Websites']
    },
    {
        id: 3,
        img: 'assets/images/babearia.png',
        title: 'Web Site',
        type: ['Todos', 'Websites']
    },
    {
        id: 4,
        img: 'assets/images/starbucks.png',
        title: 'Web Site',
        type: ['Todos', 'Websites']
    },
    {
        id: 5,
        img: 'assets/images/dsin.png',
        title: 'Web Site',
        type: ['Todos', 'Websites']
    },

    {
        id: 6,
        img: 'assets/images/icon.png',
        title: 'Web Site',
        type: ['Todos', 'Websites']
    },
    {
        id: 7,
        img: 'assets/images/cloneGoogle.png',
        title: 'Web Site',
        type: ['Todos', 'Websites']
    },
    {
        id: 8,
        img: 'assets/images/otica.png',
        title: 'Web Site',
        type: ['Todos', 'Websites']
    },

    {
        id: 9,
        img: 'assets/images/landingPageMac.png',
        title: 'Web Site',
        type: ['Todos', 'Websites']
    },
];

function searchPortifolio(num, type) {
    list(num, type);
    let button = document.querySelectorAll('.group-searches-row button');
    button.forEach(i => {
        i.classList.remove('active-search');
        i.addEventListener('click', () => {
            i.classList.add('active-search');
        });
    });
}

list(0, 'Todos');

function list(num, type) {
    cards.innerHTML = "";
    listPortifolio.map(item => {
        if (item.type[num] === `${type}`) {
            cards.innerHTML +=
                ` 
             <div class="card--portifolio card${item.id}" data-aos="zoom-in" data-aos-delay="100">
               <img src="${item.img}">
               <div class="card--dark"></div>
               <div class="card--hover">
                 <div class="hover-info">
                   <h5>Web Site</h5>
                   <p>Responsive</p>
                   <button onclick="card(${item.id})" class="button-portifolio">Mais detalhes</buttton>
                 </div>
               </div>
             </div>
            `;
        }
    });
}

