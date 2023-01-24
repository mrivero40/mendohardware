// UTIL GENERALES
const dolarCot = 192;
const parrafoTerminos = 'Promociones válidas modalidad de pago CONTADO (tarj. débito, transf. bancaria o mercadopago, efectivo). Sujeto a disponibilidad de stock, cambios en las politicas arancelarias y tipo de cambio.';
const urlImg = 'https://mendohardware.com.ar/img/';

window.addEventListener('load', renderProducts);

    // fn priceWithPoint -> Compatible hasta $999.999

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


// ESCUCHADOR HASCHANGE PARA FUTURA NAVEGACION POR HASH (no implementado)

window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);

function navigation() {
    if (location.hash.startsWith('#home')) {
        //console.log('home');        
    } else if (location.hash.startsWith('#promos')) {
        //console.log('promos');        
    } else if (location.hash.startsWith('#servicios')) {
        //console.log('servicios');
    } else if (location.hash.startsWith('#contacto')) {
        //console.log('contacto');
    } else {
        //console.log('home2');
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
        this.image = urlImg + image;
        this.name = name;
        this.price = price;
    };
};

const epsonT544 = new Products(
    'epsonT544.png',
    'Botella de Tinta Epson T544 original c/u',
    18,
);
const xiaomiLite3 = new Products(
    'xiaomiRedmiLite3.png',
    'Auricular bluetooth Xiaomi Redmi Buds 3 Lite',
    29.23,
);
const xiaomiEarBasic2 = new Products(
    'xiaomiEarphonesBasic2.png',
    'Auricular bluetooth Xiaomi Earphones Basic 2',
    44.48,
);
const gigabyte480 = new Products(
    'ssd480Gigabyte.png',
    'Disco Sólido SATA 480gb Gigabyte',
    70.55,
);
const msiGh30 = new Products(
    'auricularMsiGamer.png',
    'Auricular gamer Msi Inmerse Gh30',
    55.68,
);
const gigabyteKm6300 = new Products(
    'kitGigabyte.png',
    'Kit Tec+Mou usb Gigabyte Km6300 (inglés)',
    19.36,
);
const perfonmanceWifi = new Products(
    'usbWifi300.png',
    'Wifi usb 300mbps Perfonmance 2.4Ghz Realtek 8192',
    9.8,
);
const trustYvi = new Products(
    'mouseTrust.png',
    'Mouse inalámbrico Trust YVI ambidiestro',
    11.98,
);
const gigabyte240 = new Products(
    'ssd240Gigabyte.png',
    'Disco Sólido SATA 240gb Gigabyte',
    44.21,
);
const geniusHf280 = new Products(
    'parlanteGeniusHF280.png',
    'Parlantes 2.0 USB Genius 6w SP-HF280',
    18.49,
);
const gigabyte120 = new Products(
    'ssd120Gigabyte.png',
    'Disco Sólido SATA 120gb Gigabyte',
    35.42,
);
const tpLinkDecoM5 = new Products(
    'decoM5.jpg',
    'Sistema WIFI Deco M5 AC1300 Mesh',
    112.4,
);
const geniusHsM900Bt = new Products(
    'hsM900BT.jpg',
    'Auricular bluetooth Genius HS-M900BT',
    19.5,
);



// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS SECCION PROMOS WEB

const productsPromo = [geniusHsM900Bt, tpLinkDecoM5, gigabyte120, epsonT544, xiaomiEarBasic2, msiGh30, perfonmanceWifi, trustYvi, geniusHf280, gigabyteKm6300,];

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
        h4ProductPrice.innerText = '$' + priceWithPoint((Math.ceil(dolarCot * product.price)));

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