const urlImg = 'https://mendohardware.com.ar/img/';

// IMPLEMENTACION DE CLASES PARA PRODUCTOS A RENDERIZAR EN HTML SECTION PROMOS WEB A PARTIR DE ARRAY DE PRODUCTOS. FILTRADO POR COTEGORIAS A PARTIR DE ARRAY.

const productsStock = []; // para implementar toda la lista de productos
const productsPromo = []; // solo los productos que esten como hot
let productsCategory = []; // productos por categoria

class Products {
    constructor( image, name, price, stock, categories, hot, url ) {
        this.image = urlImg + image;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.categories = categories;
        this.hot = hot;
        this.url = url;

        if(this.stock === true && this.hot === true) {
            productsPromo.push(this);
        };
        if(this.stock) {
            productsStock.push(this);
        };      
    };      
};

function searchCategory(category) {
    productsCategory = [];
    for(let product of productsStock) {
        if(product.categories === category) {
            productsCategory.push(product);
        };
    };
    return productsCategory;
};


// LISTA DE PRODUCTOS - PRODUCTS LIST

// CATEGORIA AURICULARES
const msiGh30 = new Products(
    'auricularMsiGamer.png',
    'Auricular c/mic Gamer Inmerse Gh30 Msi',
    76.83,
    true,
    'auriculares',
    true,
    'https://mendohardware.com.ar/tienda/product/auricular-c-mic-gamer-inmerse-gh30-msi/',
);
const auriGenius04S = new Products(
    'geniusHs04S.jpg',
    'Auricular c/mic HS-04S Genius (single jack)',
    30.06,
    true,
    'auriculares',
    false,
    'https://mendohardware.com.ar/tienda/product/auricular-c-mic-hs-04s-genius-single-jack/',
);
const auriGeniusHs200c = new Products(
    'geniusHs200C.jpg',
    'Auricular c/mic HS-200C Genius (PC-doble jack)',
    13.5,
    true,
    'auriculares',
    false,
    'https://mendohardware.com.ar/tienda/product/auricular-c-mic-hs-200c-genius-pc-doble-jack/',
);

// CATEGORIA CONECTIVIDAD
const usbWifiPerfonmance = new Products(
    'usbWifi300.png',
    'Wifi usb 300mbps 2.4Ghz Realtek 8192 Perfonmance',
    15,
    true,
    'conectividad',
    true,
    'https://mendohardware.com.ar/tienda/product/wifi-usb-300mbps-2-4ghz-realtek8192-perfonmance/',
);

// CATEGORIA DISCOS SOLIDOS

const kinstong240 = new Products(
    'ssd240a400Kingston.jpg',
    'Disco Sólido SATA 240gb Kingston',
    48.17,
    true,
    'discos sólidos',
    true,
    'https://mendohardware.com.ar/tienda/producto/disco-solido-sata-240gb-a400-kingston/',
);

// CATEGORIA FUENTES
const fuenteATX550WPerf = new Products(
    'fuenteATX550WPerf.jpg',
    'Fuente ATX 550W sataX4 Perfonmance',
    42.47,
    true,
    'fuentes',
    false,
    'https://mendohardware.com.ar/tienda/product/fuente-atx-550w-satax4-perfonmance/',
);
const fuenteSlim600WCX = new Products(
    'fuenteSlim600WCX.jpeg',
    'Fuente Slim 600W sataX4 p/GabSlim CX',
    53.09,
    true,
    'fuentes',
    false,
    'https://mendohardware.com.ar/tienda/product/fuente-slim-600w-satax4-p-gabslim-cx/',
);

// CATEGORIA MEMORIAS FLASH
const usbKingston32gbC = new Products(
    'kingstonDT7032Gb.jpg',
    'Pen Drive usb-C 32gb DT70 Kingston',
    18,
    true,
    'memorias flash',
    false,
    'https://mendohardware.com.ar/tienda/product/pen-drive-usb-c-32gb-dt70-kingston/',
);

// CATEGORIA MOUSES
const trustYvi = new Products(
    'mouseTrust.png',
    'Mouse inalámbrico Trust YVI ambidiestro',
    18.64,
    true,
    'mouses',
    true,
    'https://mendohardware.com.ar/tienda/product/mouse-inalambrico-trust-yvi-ambidiestro/',
);
const mouGeniusScorpion = new Products(
    'mouseGeniusScorpion.jpg',
    'Mouse Gamer Scorpion M8-610 Genius',
    33.76,
    true,
    'mouses',
    true,
    'https://mendohardware.com.ar/tienda/product/mouse-gamer-scorpion-m8-610-genius/',
);
const mouGenius = new Products(
    'geniusDX110.jpg',
    'Mouse Usb óptico DX-120 Genius',
    9.88,
    true,
    'mouses',
    false,
    'https://mendohardware.com.ar/tienda/product/mouse-usb-optico-dx-120-genius/',
);
const mouLogitechM110 = new Products(
    'mouseLogitechM110-red.webp',
    'Mouse USB silencioso M110 Logitech',
    20.22,
    true,
    'mouses',
    false,
    'https://mendohardware.com.ar/tienda/product/mouse-usb-silencioso-m110-logitech-rojo/',
);

// CATEGORIA TECLADOS
const gigabyteKm6300 = new Products(
    'kitGigabyte.webp',
    'Tec+Mou Usb Inglés Gigabyte Km6300',
    18.01,
    true,
    'teclados',
    true,
    'https://mendohardware.com.ar/tienda/product/tecmou-usb-ingles-gigabyte-km6300/',
);
const tecladoNumGenius110 = new Products(
    'tecladoNumPadGenius110.jpg',
    'Teclado Numeral Usb NumPad110 Genius',
    20.86,
    true,
    'teclados',
    false,
    'https://mendohardware.com.ar/tienda/product/teclado-numeral-usb-numpad110-genius/',
);

// CATEGORIA TINTAS
const botellaEpsonT544 = new Products(
    'epsonT544.png',
    'Botellas de Tinta T544 Epson original packX4',
    187.5,
    true,
    'tintas',
    true,
    'https://mendohardware.com.ar/tienda/product/botellas-de-tinta-t544-epson-original-packx4/',
);
const botellaEpsonT664 = new Products(
    'EpsonT664.jpg',
    'Botella de Tinta T664 Epson original packX4',
    187.5,
    true,
    'tintas',
    true,
    'https://mendohardware.com.ar/tienda/producto/botellas-de-tinta-t664-epson-original-packx4-2/'
);
const botellaBrotherBT5001 = new Products(
    'botellaBrotherBT5001.webp',
    'Botellas de Tinta BT5001 Brother original c/u',
    14,
    true,
    'tintas',
    false,
    'https://mendohardware.com.ar/tienda/product/botellas-de-tinta-bt5001-brother-original-c-u/',
);
const botellaBrohter60bkBt5001 = new Products(    
    'brother60bk-bt5001pack.jpg',
    'Botellas de Tinta 60BK+BT5001 Brother original packX4',
    58.56,
    true,
    'tintas',
    true,
    'https://mendohardware.com.ar/tienda/product/botellas-de-tinta-60bkbt5001-brother-original-packx4/',
);
const botellaBrotherBt6001Bt5001 = new Products(
    'bt6001-bt5001-x4.jpeg',
    'Botellas de Tinta BT6001+BT5001 Brother original packX4',
    58.56,
    true,
    'tintas',
    true,
    'https://mendohardware.com.ar/tienda/product/botellas-de-tinta-bt6001bt5001-brother-original-packx4/',
);

// CATEGORIA TONER
const tonerAlterBrotherTn660 = new Products(
    'tonerAlterTn660.jpg',
    'Tóner Alternativo p/Brother TN660/2340/2370 GTC',
    22.38,
    true,
    'tóner',
    false,
    'https://mendohardware.com.ar/tienda/product/toner-alternativo-p-brother-tn660-2340-2370-gtc/',
);
const tonerAlterBrotherTn580 = new Products(
    'tonerAlterTn660.jpg',
    'Tóner Alternativo p/Brother TN580/650 GTC',
    22.38,
    true,
    'tóner',
    false,
    'https://mendohardware.com.ar/tienda/product/toner-alternativo-p-brother-tn580-650-gtc/',
);
const tonerAlterHp255A = new Products(
    'tonerAlterCE255A.jpg',
    'Tóner Alternativo p/HP CE255A Perfonmance',
    22.52,
    true,
    'tóner',
    false,
    'https://mendohardware.com.ar/tienda/product/toner-alternativo-p-hp-ce255a-perfonmance/',
);

// CATEGORIA VARIOS

const powerBank2600TRV = new Products(
    'powerBank2600mahTRV.jpg',
    'Cargador Portátil 2600mah TRV',
    16.94,
    true,
    'varios',
    false,
    'https://mendohardware.com.ar/tienda/product/cargador-portatil-2600mah-trv/',
);
const cargadorInalambricoT1000 = new Products(
    'CargadorInalambricoPerformanceT1000.jpeg',
    'Cargador Inalámbrico T1000 Perfonmance',
    22.27,
    true,
    'varios',
    false,
    'https://mendohardware.com.ar/tienda/product/cargador-inalambrico-t1000-perfonmance/',
);
const cableDisplayPortNisuta = new Products(
    'cableDisplayPortNisuta.webp',
    'Cable DisplayPort a HDMI 1.8m NS-CADPHD Nisuta',
    48.1,
    true,
    'varios',
    false,
    'https://mendohardware.com.ar/tienda',
);
const zapatillaTRV5x220 = new Products (
    'prolongadorTRV5x220.webp',
    'Prolongador Múltiple TRV 5x220v 1.5mts switch',
    18,
    true,
    'varios',
    false,
    'https://mendohardware.com.ar/tienda/product/prolongador-multiple-trv-5x220v-1-5mts-switch/',
)


// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS CON STOCK EN SECCION PROMOS WEB. LAS INSTANCIAS DE PRODUCTOS RENDERIZADAS SERáN UNICAMENTE LAS QUE TENGAN LA PROPIEDAD STOCK EN TRUE.

//export default { productsPromo, productsCategory, searchCategory };