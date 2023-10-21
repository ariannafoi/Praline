//catturo bottoni avanti e dietro
let btnPreview = document.querySelector('#preview');
let btnNext = document.querySelector('#next');

//catturo img
let imgElement = document.querySelector('#iceCreamImg');

//creo dinamicamente h1
let div = document.querySelector('.space-for-p1');
let nameProduct = document.createElement('p');
nameProduct.textContent = 'Fondente Extra';
div.appendChild(nameProduct);

//aggancio attributo classe che è presente nello style
nameProduct.setAttribute('class', 'p1-custom');

//creo dinamicamente p
let div2 = document.querySelector('.space-for-p2');
let descriptionProduct = document.createElement('p');
descriptionProduct.textContent = 'Iconica pralina dall’incarto nero e doppio fiocco: un guscio croccante di finissimo cioccolato extra fondente che racchiude un irresistibile ripieno.';
div2.appendChild(descriptionProduct);

//aggancio attributo per lo stile paragrafo
descriptionProduct.setAttribute('class', 'p2-custom');

let products = [
    {
        description: 'Iconica pralina dall’incarto nero e doppio fiocco: un guscio croccante di finissimo cioccolato extra fondente che racchiude un irresistibile ripieno.', 
        img: "./img/foto1.webp", 
        name: 'Fondente Extra',
    },
    {
        description: 'Iconiche praline dall’incarto colorato e doppio fiocco: un guscio croccante di finissimo cioccolato racchiude un irresistibile ripieno.', 
        img: "./img/foto2.webp",
        name: 'Assortite'
    },

    {
        description: 'Iconica pralina dall’incarto verde e doppio fiocco: un guscio croccante di finissimo cioccolato al latte racchiude un irresistibile ripieno al pistacchio.', 
        img: "./img/foto3.webp", 
        name: 'Pistacchio'
    },
    {
        description: 'Il Cornet Doppio Cioccolato contiene 200g di praline. Un cuore di morbido ed irresistibile ripieno fondente racchiuso in un guscio di finissimo cioccolato al latte.', 
        img: "./img/foto4.webp", 
        name: 'Doppio Cioccolato'
    },
    {
        description: "L'iconica pralina con un cuore di morbido ed irresistibile caramello con un pizzico di sale racchiuso in un guscio di finissimo cioccolato al latte.", 
        img: "./img/foto5.webp", 
        name: 'Caramello Salato'
    },
];

let currentImgIndex = 0;

function updateProductInfo(){
    imgElement.src = products[currentImgIndex].img;

    nameProduct.textContent = products[currentImgIndex].name;
    div.appendChild(nameProduct);

    descriptionProduct.textContent = products[currentImgIndex].description;
    div2.appendChild(descriptionProduct);
}

btnNext.addEventListener('click', function () {
    currentImgIndex = (currentImgIndex + 1) % products.length;
    updateProductInfo();

});

btnPreview.addEventListener('click', function () {
    currentImgIndex = (currentImgIndex - 1 + products.length) % products.length;
    updateProductInfo();
});