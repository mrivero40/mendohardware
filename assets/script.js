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
let dolarCot = 162;

class Products {
    constructor( image, name, price ) {
        this.image = image;
        this.name = name;
        this.price = price;
    };
};

const product1 = new Products( './img/epsonT544.png', 'Botella de Tinta Epson T544 original c/u', 22.15);
const product2 = new Products( './img/xiaomiRedmiLite3.png', 'Auricular bluetooth Xiaomi Redmi Buds 3 Lite', 31.06);
const product3 = new Products('./img/xiaomiEarphonesBasic2.png', 'Auricular bluetooth Xiaomi Earphones Basic 2', 44.05);
const product4 = new Products('./img/ssd480Gigabyte.png', 'Disco Sólido SATA 480gb Gigabyte', 69.67);
const product5 = new Products('./img/auricularMsiGamer.png', 'Auricular gamer Msi Inmerse Gh30', 57.62);
const product6 = new Products('./img/kitGigabyte.png', 'Kit Tec+Mou usb Gigabyte Km6300 (inglés)', 18.95);
const product7 = new Products('./img/usbWifi300.png', 'Wifi usb 300mbps Perfonmance', 7.54);
const product8 = new Products('./img/mouseTrust.png', 'Mouse inalámbrico Trust YVI', 11.41);
const product9 = new Products('./img/ssd240Gigabyte.png', 'Disco Sólido SATA 240gb Gigabyte', 44.31);
const produc10 = new Products('./img/ssd240Gigabyte.png', 'Disco Sólido SATA 240gb Gigabyte', 59.31);

const productsPromo = [product1, product2, product3, product4, product5, product6, product7, product8, product9,];

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
        h4ProductPrice.innerText = `$${ parseInt( dolarCot * product.price )},00`;

        const divContainerPrincipal = document.querySelector('.grid-container-principal');
        divContainerPrincipal.appendChild(divProductContainer);
        divProductContainer.appendChild(figureImgContainer);
        figureImgContainer.appendChild(imgProductImage);
        divProductContainer.appendChild(paragraphProductName);
        divProductContainer.appendChild(h4ProductPrice);
    });
};
renderProducts(productsPromo);



