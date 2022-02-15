
const services = [

    {   
        id: '0',
        title: 'Atendimento',
        description: 'Temos uma equipe pronta para dar o <span class="strong">melhor atendimento</span> ao seu cliente. Aqui, você só é acionado se for realmente necessário.',
        image: '/imgs/attendance.png'
    },

    {
        id: '1',
        title: 'Campanhas',
        description: 'Nossa equipe de marketing dará <span class="strong">total suporte</span> a todas as suas campanhas ao longo de todo o ano.',
        image: '/imgs/campaign.png'
    },

    {
        id: '2',
        title: 'Impulsionamento',
        description: 'Visibilidade é algo fundamental para que se possa garantir <span class="strong">maior alcance</span> da marca para o seu público.',
        image: '/imgs/boost.png'
    },

    {
        id: '3',    
        title: 'Pós-venda',
        description: 'Garanta seu pós-venda, fidelizando mais clientes com um plano de ação <span class="strong">realmente</span> alcance suas metas.',
        image: '/imgs/after-sale.png'
    },

    {
        id: '4',
        title: 'Gestão',
        description: 'Nosso suporte a sua marca permite que você tenha <span class="strong">maior entendimento</span> sobre o que acontece com seu negócio.',
        image: '/imgs/management.png'
    },
];

document.addEventListener('click', function(e) {

    services.map((item) => {
        const element = e.target;
        const serviceInfo = document.querySelector('.service-info');
                
        if(element.className === 'service-option' && element.attributes['data-key'].value === item.id) {
            document.querySelector('.service-title').innerHTML = item.title;
            document.querySelector('.service-description').innerHTML = item.description;
            document.querySelector('.circle-image').src = item.image;
        }
    });
});
