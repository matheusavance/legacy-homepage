
const differetials = [

    {
        title: 'Marketplace',
        class: 'first',
        description: 'Um canal de venda a mais para você expor os seus produtos.',
        src: '/imgs/marktplace-icon.png'
    },

    {
        title: 'Logística',
        class: 'second',
        description: 'Cuidamos de toda logística dos seus pedidos e o seu frete fica mais barato.',
        src: '/imgs/logistics-icon.png'
    },

    {
        title: 'Loja virtual',
        class: 'third',
        description: 'Fornecemos uma loja virtual gratuíta para você usar como site próprio..',
        src: '/imgs/site-icon.png'
    },

    {
        title: 'Gestão simples',
        class: 'fourth',
        description: 'Gerencie o seu negócio na palma da mão com eficiência e praticidade.',
        src: '/imgs/management-icon.png'
    }

];


// creating grid items

differetials.forEach(function(item) {
    
    const optionItem = document.createElement('div');
    optionItem.classList.add('option-item');
    document.querySelector('.grid-options').appendChild(optionItem);
    
    const contentItem = document.createElement('div');
    contentItem.classList.add('content-item');
    optionItem.appendChild(contentItem);

    const titleOption = document.createElement('div');
    titleOption.classList.add('title');
    titleOption.innerHTML = item.title;
    contentItem.appendChild(titleOption);

    const captionOption = document.createElement('div');
    captionOption.classList.add('caption', item.class);
    captionOption.innerHTML = item.description;
    contentItem.appendChild(captionOption);

    const imageOption = document.createElement('img');
    imageOption.setAttribute('src', item.src);
    optionItem.appendChild(imageOption);
});