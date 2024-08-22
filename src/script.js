// ESTA WEB ESTA EN CONSTANTE EXPERIMENTACIóN Y SUJETA A CAMBIOS PERMANENTES, POR LO CUAL ENCONTRARáS MUCHO CóDIGO COMENTADO ANTES UTILIZADO Y REEMPLAZADO POR MEJORES VERSIONES O UTILIZANDO NUEVAS HERRAMIENTAS IMPLEMENTADAS //


// IMPORTACIONES DESDE OTROS ARCHIVOS

//import info from './products.js';
import { registerImg } from './lazy.js';


// UTIL GENERALES

const dolarCot = 965;

window.addEventListener('load', function() {
    renderProducts(productsPromo);
});


// FUNCTION PARA EL PUNTO EN LOS PRECIOS -> UTILIZANDO LA API DEL NAVEGADOR DE INTERNALIZACION.

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('es-AR').format(price);
    return newPrice;
};


// ESCUCHADOR HASCHANGE PARA FUTURA NAVEGACION POR HASH (no implementado)
/*
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
*/

// IMPLEMENTACION DE PRECIOS CALCULADOS PARA PROMOS PRINCIPALES DEL HOME

// NOTEBOOK 15.6" LENOVO TBOOK I5-12VA GENERACION
renderHomePrice({
    pricesCont: spanPriceLenovoI5,
    pricesDues6: spanDuesLenovoI5,
    pricesUSD: 1117.305,
    pricesTF: spanPricesTFLenovoI5,
});


// NOTEBOOK 15.6" HP G250 G9 Intel I3-12VA GENERACION
renderHomePrice({
    pricesCont: spanPriceHP250,
    pricesDues6: spanDuesHP250,
    pricesUSD: 1036.16,
    pricesTF: spanPricesTFHP250,
});

// PARAMETROS DONDE SE RENDERIZA EN HTML LOS PRECIOS CALCULADOS
function renderHomePrice({pricesCont, pricesDues6, pricesUSD, pricesTF}) {
    const pricePayment = (dolarCot * pricesUSD).toFixed(0);
    const price6 = ((pricePayment * 1.2) / 6).toFixed(0);
    const priceTF = (pricePayment * 1.2).toFixed(0);
    
    pricesCont.innerText = `$${formatPrice(pricePayment)}`;    
    pricesDues6.innerText = `$${formatPrice(price6)}*`;    
    pricesTF.innerText = `$${formatPrice(priceTF)}`;
};

/*

// IMPLEMENTACION DE PRODUCTOS EN OBJETOS (lógica separada en products.js).

*/

// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS SECCION PROMOS WEB (products.js)

function renderProducts(productsList) {

    const divContainerPrincipal = document.querySelector('.grid-container-principal');       
    divContainerPrincipal.innerHTML = "";    

    productsList.forEach(product => {
        
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

        //const h4ProductPrice = document.createElement('h4');
        //h4ProductPrice.innerText = '$' + formatPrice((Math.ceil(dolarCot * product.price)));
        //h4ProductPrice.innerText = 'Consultar';

        const linkProducts = document.createElement('a');
        linkProducts.setAttribute('href', product.url);
        linkProducts.setAttribute('target', '_blank');
        const buttonProducts = document.createElement('button');
        buttonProducts.innerText = 'Ver más';
        linkProducts.appendChild(buttonProducts); 
        
        divContainerPrincipal.appendChild(divProductContainer);
        figureImgContainer.appendChild(imgProductImage);
        divProductContainer.append(figureImgContainer, paragraphProductName, linkProducts);        
    });
};


// FUNCION PARA AGREGAR PRODUCTOS POR CATEGORÍAS AL ARRAY A RENDERIZAR, A PARTIR DE LOS BOTONES DE HTML CON LAS CATEGORÍAS.

const buttonCategories = document.querySelectorAll('.button-categories');

buttonCategories.forEach( button => {
    button.addEventListener('click', function() {
        removeSelect();
        button.classList.add('button-select');
        let category = button.outerText.toLowerCase();
        renderProducts( searchCategory(category) );
    });
});

function removeSelect() {
    buttonCategories.forEach( button => button.classList.remove('button-select'));
};

const buttonHot = document.getElementById('buttonHot');
buttonHot.addEventListener('click', function() {
    renderProducts(productsPromo);
});