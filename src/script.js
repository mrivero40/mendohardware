// ESTA WEB ESTA EN CONSTANTE EXPERIMENTACIóN Y SUJETA A CAMBIOS PERMANENTES, POR LO CUAL ENCONTRARáS MUCHO CóDIGO COMENTADO ANTES UTILIZADO Y REEMPLAZADO POR MEJORES VERSIONES O UTILIZANDO NUEVAS HERRAMIENTAS IMPLEMENTADAS //


// IMPORTACIONES DESDE OTROS ARCHIVOS

import productsPromo from './products.js';
import { registerImg } from './lazy.js';


// UTIL GENERALES

const dolarCot = 218;
const parrafoTerminos = 'Promociones válidas modalidad de pago CONTADO (tarj. débito, transf. bancaria o mercadopago, efectivo). Sujeto a disponibilidad de stock, cambios en las politicas arancelarias y tipo de cambio.';

window.addEventListener('load', renderProducts);


// FUNCTION PARA EL PUNTO EN LOS PRECIOS -> UTILIZANDO LA API DEL NAVEGADOR DE INTERNALIZACION.

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('es-AR').format(price);
    return newPrice;
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
renderHomePrice(spanPriceLeft, spanDuesLeft, spanTFLeft, 1503.46); // Not 15.6 Dell 3511 i3-11va

const spanPriceCenter = document.querySelector('#spanPriceCenter');
const spanDuesCenter = document.querySelector('#spanDuesCenter');
const spanTFCenter = document.querySelector('#spanTFCenter');
renderHomePrice(spanPriceCenter, spanDuesCenter, spanTFCenter, 1207.10); // Not 14 Hp 240-g8 i3-10ma

const spanPriceRight = document.querySelector('#spanPriceRight');
const spanDuesRight = document.querySelector('#spanDuesRight');
const spanTFRight = document.querySelector('#spanTFRight');
renderHomePrice(spanPriceRight, spanDuesRight, spanTFRight, 1509.28); // Not 15.6 Lenovo V15 I3-10ma

function renderHomePrice(priceCont, duesCont, pTFCont, price) {
    const pricePayment = (dolarCot * price).toFixed(0);
    const priceDues = ((pricePayment * 1.5) / 12).toFixed(0);
    const priceTF = (pricePayment * 1.5).toFixed(0);
    
    priceCont.innerText = `$${formatPrice(pricePayment)}`;    
    duesCont.innerText = `$${formatPrice(priceDues)}*`;    
    pTFCont.innerText = ` | PTF$${formatPrice(priceTF)}*`;
};

/*

// IMPLEMENTACION DE PRODUCTOS EN OBJETOS (lógica separada en products.js).

*/


// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS SECCION PROMOS WEB (products.js)


function renderProducts() {
    productsPromo.forEach(product => {
        
        const divProductContainer = document.createElement('div');
        divProductContainer.classList.add('grid-container-product');

        const figureImgContainer = document.createElement('figure');
        figureImgContainer.classList.add('grid-container-img');
        figureImgContainer.classList.add('loading-skeleton');

        const imgProductImage = document.createElement('img');
        imgProductImage.setAttribute('data-src', product.image);
        imgProductImage.setAttribute('title', product.name);
        imgProductImage.setAttribute('alt', product.name);
        registerImg(imgProductImage);

        const paragraphProductName = document.createElement('p');
        paragraphProductName.innerText = product.name;

        const h4ProductPrice = document.createElement('h4');
        h4ProductPrice.innerText = '$' + formatPrice((Math.ceil(dolarCot * product.price)));

        const divContainerPrincipal = document.querySelector('.grid-container-principal');
        divContainerPrincipal.appendChild(divProductContainer);
        figureImgContainer.appendChild(imgProductImage);
        divProductContainer.append(figureImgContainer, paragraphProductName, h4ProductPrice);
        
    });
    const sectionHotProducts = document.querySelector('.section-hot-products');

    const divTerminos = document.createElement('div');
    divTerminos.classList.add('terminos');
    const pTerminos = document.createElement('p');
    pTerminos.innerText = parrafoTerminos;
    divTerminos.appendChild(pTerminos);

    sectionHotProducts.appendChild(divTerminos);
};