// ESCUCHADOR HASCHANGE PARA FUTURA NAVEGACION POR HASH

window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);

function navigation() {
    if (location.hash.startsWith('#home')) {
        console.log('home');        
    } else if (location.hash.startsWith('#promos')) {
        console.log('promos');        
    } else if (location.hash.startsWith('#servicios')) {
        console.log('servicios');
    } else if (location.hash.startsWith('#contacto')) {
        console.log('contacto');
    } else {
        console.log('home2');
    };
};

// IMPLEMENTACION DE PRODUCTOS EN OBJETOS Y RENDERIZADO EN HTML

let parrafoTerminos = 'Promociones válidas con modalidad de pago CONTADO. Sujeto a disponibilidad de stock, cambios en las politicas arancelarias y tipo de cambio.';
let dolarCot = 180;
let urlImg = 'https://mendohardware.com.ar/img/';

class Products {
    constructor( image, name, price ) {
        this.image = image;
        this.name = name;
        this.price = price;
    };
};

const product1 = new Products(
    `${urlImg}epsonT544.png`,
    'Botella de Tinta Epson T544 original c/u',
    18 );
const product2 = new Products(
    `${urlImg}xiaomiRedmiLite3.png`,
    'Auricular bluetooth Xiaomi Redmi Buds 3 Lite',
    29.23 );
const product3 = new Products(
    `${urlImg}xiaomiEarphonesBasic2.png`,
    'Auricular bluetooth Xiaomi Earphones Basic 2',
    44.48 );
const product4 = new Products(
    `${urlImg}ssd480Gigabyte.png`,
    'Disco Sólido SATA 480gb Gigabyte',
    70.55 );
const product5 = new Products(
    `${urlImg}auricularMsiGamer.png`,
    'Auricular gamer Msi Inmerse Gh30',
    55.68 );
const product6 = new Products(
    `${urlImg}kitGigabyte.png`,
    'Kit Tec+Mou usb Gigabyte Km6300 (inglés)',
    19.36 );
const product7 = new Products(
    `${urlImg}usbWifi300.png`,
    'Wifi usb 300mbps Perfonmance 2.4Ghz Realtek 8192',
    9.8 );
const product8 = new Products(
    `${urlImg}mouseTrust.png`,
    'Mouse inalámbrico Trust YVI',
    11.98 );
const product9 = new Products(
    `${urlImg}ssd240Gigabyte.png`,
    'Disco Sólido SATA 240gb Gigabyte',
    44.21 );
const product10 = new Products(
    `${urlImg}parlanteGeniusHF280.png`,
    'Parlantes 2.0 USB Genius 6w SP-HF280',
    18.49 );

const productsPromo = [product1, product2, product3, product4, product5, product7, product8, product9, product10, product6];

function renderProducts(arrayProducts) {    

    arrayProducts.forEach(product => {
        const divProductContainer = document.createElement('div');
        divProductContainer.classList.add('grid-container-product');

        const figureImgContainer = document.createElement('figure');
        figureImgContainer.classList.add('grid-container-img');

        const imgProductImage = document.createElement('img');
        imgProductImage.setAttribute('src', product.image);
        imgProductImage.setAttribute('title', product.name);
        imgProductImage.setAttribute('alt', product.name);

        const paragraphProductName = document.createElement('p');
        paragraphProductName.innerText = product.name;

        const h4ProductPrice = document.createElement('h4');
        h4ProductPrice.innerText = '$' + Math.ceil(dolarCot * product.price);

        const divContainerPrincipal = document.querySelector('.grid-container-principal');
        divContainerPrincipal.appendChild(divProductContainer);
        divProductContainer.appendChild(figureImgContainer);
        figureImgContainer.appendChild(imgProductImage);
        divProductContainer.appendChild(paragraphProductName);
        divProductContainer.appendChild(h4ProductPrice);
        
    });

    const sectionHotProducts = document.querySelector('.section-hot-products');

    const divTerminos = document.createElement('div');
    divTerminos.classList.add('terminos');
    const pTerminos = document.createElement('p');
    pTerminos.innerText = parrafoTerminos;
    divTerminos.appendChild(pTerminos);

    sectionHotProducts.appendChild(divTerminos);

};

renderProducts(productsPromo);



