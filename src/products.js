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
const auriGeniusHs200c = new Products(
    'geniusHs200C.jpg',
    'Auricular c/mic HS-200C Genius (PC-doble jack)',
    13.5,
    true,
    'auriculares',
    true,
    'https://mendohardware.com.ar/tienda/product/auricular-c-mic-hs-200c-genius-pc-doble-jack/',
);

// CATEGORIA MEMORIAS FLASH
const usbKingston32gbC = new Products(
    'kingstonDT7032Gb.jpg',
    'Pen Drive usb-C 32gb DT70 Kingston',
    18,
    true,
    'memorias flash',
    true,
    'https://mendohardware.com.ar/tienda/product/pen-drive-usb-c-32gb-dt70-kingston/',
);

// CATEGORIA MOUSES
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
    true,
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

// CATEGORIA TONER
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

export { productsPromo, productsCategory, searchCategory };