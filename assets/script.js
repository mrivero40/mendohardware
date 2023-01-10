// UTIL GENERALES
const dolarCot = 188;
const parrafoTerminos = 'Promociones válidas modalidad de pago CONTADO. Sujeto a disponibilidad de stock, cambios en las politicas arancelarias y tipo de cambio.';
const urlImg = 'https://mendohardware.com.ar/img/';

function priceWithPoint(price) {
    const priceToString = price.toString();
    let pricePoint = '';
    for(index in priceToString) {
        if(index > priceToString.length - 4) {
            pricePoint += priceToString[index];
        }
        if (index == priceToString.length - 4) {
            pricePoint += priceToString[index] + '.';
        }
        if (index < priceToString.length - 4) {
            pricePoint += priceToString[index];
        };
    };    
    return pricePoint;
};

window.addEventListener('load', renderProducts);


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


// IMPLEMENTACION DE PRECIOS CALCULADOS PARA PROMOS PRINCIPALES DEL HOME

const spanPriceLeft = document.querySelector('#spanPriceLeft');
const spanDuesLeft = document.querySelector('#spanDuesLeft');
const spanTFLeft = document.querySelector('#spanTFLeft');
renderHomePrice(spanPriceLeft, spanDuesLeft, spanTFLeft, 1202.13); // Not 15.6 Dell 3511 i3-11va

const spanPriceCenter = document.querySelector('#spanPriceCenter');
const spanDuesCenter = document.querySelector('#spanDuesCenter');
const spanTFCenter = document.querySelector('#spanTFCenter');
renderHomePrice(spanPriceCenter, spanDuesCenter, spanTFCenter, 950.8); // Not 14 Hp 240-g8 i3-10ma

const spanPriceRight = document.querySelector('#spanPriceRight');
const spanDuesRight = document.querySelector('#spanDuesRight');
const spanTFRight = document.querySelector('#spanTFRight');
renderHomePrice(spanPriceRight, spanDuesRight, spanTFRight, 1464.77); // Not 15.6 Lenovo T-Book i5-11va

function renderHomePrice(priceCont, duesCont, pTFCont, price) {
    const pricePayment = (dolarCot * price).toFixed(0);
    const priceDues = ((pricePayment * 1.5) / 12).toFixed(0);
    const priceTF = (pricePayment * 1.5).toFixed(0);

    priceCont.innerText = `$${priceWithPoint(pricePayment)}`;
    
    duesCont.innerText = `$${priceWithPoint(priceDues)}*`;
    
    pTFCont.innerText = `PTF$${priceWithPoint(priceTF)}*`;    
};


// IMPLEMENTACION DE PRODUCTOS EN OBJETOS

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
    18,
);
const product2 = new Products(
    `${urlImg}xiaomiRedmiLite3.png`,
    'Auricular bluetooth Xiaomi Redmi Buds 3 Lite',
    29.23,
);
const product3 = new Products(
    `${urlImg}xiaomiEarphonesBasic2.png`,
    'Auricular bluetooth Xiaomi Earphones Basic 2',
    44.48,
);
const product4 = new Products(
    `${urlImg}ssd480Gigabyte.png`,
    'Disco Sólido SATA 480gb Gigabyte',
    70.55,
);
const product5 = new Products(
    `${urlImg}auricularMsiGamer.png`,
    'Auricular gamer Msi Inmerse Gh30',
    55.68,
);
const product6 = new Products(
    `${urlImg}kitGigabyte.png`,
    'Kit Tec+Mou usb Gigabyte Km6300 (inglés)',
    19.36,
);
const product7 = new Products(
    `${urlImg}usbWifi300.png`,
    'Wifi usb 300mbps Perfonmance 2.4Ghz Realtek 8192',
    9.8,
);
const product8 = new Products(
    `${urlImg}mouseTrust.png`,
    'Mouse inalámbrico Trust YVI ambidiestro',
    11.98,
);
const product9 = new Products(
    `${urlImg}ssd240Gigabyte.png`,
    'Disco Sólido SATA 240gb Gigabyte',
    44.21,
);
const product10 = new Products(
    `${urlImg}parlanteGeniusHF280.png`,
    'Parlantes 2.0 USB Genius 6w SP-HF280',
    18.49,
);
const product11 = new Products(
    `${urlImg}ssd120Gigabyte.png`,
    'Disco Sólido SATA 120gb Gigabyte',
    35.42,
);
const product12 = new Products(
    `${urlImg}decoM5TpLink.png`,
    'Sistema WIFI Deco M5 AC1300 Mesh',
    112.4,
);


// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS SECCION PROMOS WEB

const productsPromo = [product12, product11, product1, product2, product3, product5, product7, product8, product10, product6,];

function renderProducts() {
    productsPromo.forEach(product => {
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
        h4ProductPrice.innerText = priceWithPoint((Math.ceil(dolarCot * product.price)));

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

