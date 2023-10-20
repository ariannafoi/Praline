//catturo bottoni avanti e dietro
let btnPreview = document.querySelector('#preview');
let btnNext = document.querySelector('#next');

//catturo img
let imgElement = document.querySelector('#iceCreamImg');

//creo dinamicamente h1
let div = document.querySelector('.space-for-p1');
let nameProduct = document.createElement('p');
nameProduct.textContent = 'Magnum Classico';
div.appendChild(nameProduct);

//aggancio attributo classe che è presente nello style
nameProduct.setAttribute('class', 'p1-custom');


//creo dinamicamente p
let div2 = document.querySelector('.space-for-p2');
let descriptionProduct = document.createElement('p');
descriptionProduct.textContent = 'Il perfetto equilibrio tra il cioccolato croccante Magnum e il morbido e cremoso gelato alla vaniglia.';
div2.appendChild(descriptionProduct);

//aggancio attributo per lo stile paragrafo
descriptionProduct.setAttribute('class', 'p2-custom');

let products = [
    {
        description: 'Il perfetto equilibrio tra il cioccolato croccante Magnum e il morbido e cremoso gelato alla vaniglia.', 
        img: "./img/1.avif", 
        name: 'Magnum Classico',
    },
    {
        description: 'Gelato alla vaniglia avvolto in cioccolato bianco Magnum. Una dolcezza perfettamente bilanciata.', 
        img: "./img/2.avif",
        name: 'Magnum Bianco'
    },

    {
        description: 'Morbido e cremoso gelato alla vaniglia ricoperto di croccante cioccolato al latte Magnum e pezzetti di mandorle.', 
        img: "./img/3.avif", 
        name: 'Magnum Mandorle'
    },
    {
        description: 'Gustoso gelato alla nocciola variegato con gelato alla vaniglia, con una doppia copertura di cioccolato bianco e cioccolato al latte con pezzetti di nocciole caramellate.', 
        img: "./img/4.avif", 
        name: 'Magnum Nocciola Remix'
    },
    {
        description: 'Gelato al gusto di biscotto variegato con gelato al gusto di noce pecan, con guarnitura al caramello salato, cioccolato bianco con caramello e pezzetti di biscotto.', 
        img: "./img/5.avif", 
        name: 'Magnum Double Caramel'
    },
];

let currentImgIndex = 0; 

btnNext.addEventListener('click', function () {
    currentImgIndex = (currentImgIndex + 1) % products.length;

    imgElement.src = products[currentImgIndex].img;

    nameProduct.textContent = products[currentImgIndex].name;
    div.appendChild(nameProduct);

    descriptionProduct.textContent = products[currentImgIndex].description;
    div2.appendChild(descriptionProduct);

});

btnPreview.addEventListener('click', function () {
    currentImgIndex = (currentImgIndex - 1 + products.length) % products.length;

    imgElement.src = products[currentImgIndex].img;

    nameProduct.textContent = products[currentImgIndex].name;
    div.appendChild(nameProduct);

    descriptionProduct.textContent = products[currentImgIndex].description;
    div2.appendChild(descriptionProduct);
});