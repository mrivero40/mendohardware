const urlImg = 'https://mendohardware.com.ar/img/';

// IMPLEMENTACION DE CLASES PARA PRODUCTOS A RENDERIZAR EN HTML SECTION PROMOS WEB A PARTIR DE ARRAY DE PRODUCTOS. FILTRADO POR COTEGORIAS A PARTIR DE ARRAY.

const productsStock = []; // para implementar toda la lista de productos
const productsPromo = []; // solo los productos que esten como hoy
let productsCategory = []; // productos por categoria

class Products {
    constructor( image, name, price, stock, categories, hot ) {
        this.image = urlImg + image;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.categories = categories;
        this.hot = hot;

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


// LISTA DE PRODUCTOS - PRODUCTS LIST (COPIAR EL PRIMER PRODUCTO Y PEGAR AL FINAL DE LISTADO PARA REEMPLAZAR POR LOS DATOS CORRESPONDIENTES).

const epsonT544 = new Products(
    'epsonT544.png', // nombre de la imagen
    'Botella de Tinta Epson T544 original packX4', // titulo del producto
    81.4, // precio de venta final en dolares
    true, // si hay stock true sino false
    'tintas', // categoria
    true, // producto hot (destacado) true sino falta
);

// CATEGORIA AURICULARES
const xiaomiLite3 = new Products(
    'xiaomiRedmiLite3.png',
    'Auricular bluetooth Xiaomi Redmi Buds 3 Lite',
    29.23,
    false,
    'auriculares',
    false,
);
const xiaomiEarBasic2 = new Products(
    'xiaomiEarphonesBasic2.png',
    'Auricular bluetooth Xiaomi Earphones Basic 2',
    41.12,
    false,
    'auriculares',
    false,
);
const msiGh30 = new Products(
    'auricularMsiGamer.png',
    'Auricular c/mic Gamer Inmerse Gh30 Msi',
    67.38,
    true,
    'auriculares',
    true,
);
const auriGenius04S = new Products(
    'geniusHs04S.jpg',
    'Auricular c/mic HS-04S Genius (single jack)',
    22.85,
    true,
    'auriculares',
    false,
);
const geniusHsM900Bt = new Products(
    'hsM900BT.jpg',
    'Auricular c/mic bluetooth HS-M900BT Genius',
    26.78,
    true,
    'auriculares',
    true,
);
const auriGeniusHs200c = new Products(
    'geniusHs200C.jpg',
    'Auricular c/mic HS-200C Genius (PC)',
    10.25,
    true,
    'auriculares',
    false,
);

// CATEGORIA CONECTIVIDAD
const usbWifiPerfonmance = new Products(
    'usbWifi300.png',
    'Wifi usb 300mbps 2.4Ghz Realtek8192 Perfonmance',
    13.39,
    true,
    'conectividad',
    true,
);
const usbWifi823n = new Products(
    'wifi823N.webp',
    'Wifi usb 300mbps 2.4Ghz 823n Tp-Link',
    21.15,
    false,
    'conectividad',
    false,
);
const usbWifi725n = new Products(
    'Wifi725nTpLink.jpg',
    'Wifi usb 150mbps 2.4Ghz 725n Tp-Link',
    18.13,
    true,
    'conectividad',
    false,
);
const tpLinkDecoM5 = new Products(
    'decoM5.jpg',
    'Sistema WIFI Deco M5 AC1300 Mesh Tp-Link',
    134.90,
    true,
    'conectividad',
    false,
);
const router841HP = new Products(
    'tl-wr841hp.jpg',
    'Router Inalámbrico TL-WR841HP 300Mbps Tp-Link',
    92.55,
    true,
    'conectividad',
    false,
);
const router940n = new Products(
    'routerWR940N.jpg',
    'Router Inalámbrico TL-WR940N 450mbps Tp-Link',
    59.84,
    true,
    'conectividad',
    false,
);
const routerC20 = new Products(
    'routerArcherC20.jpg',
    'Router Inalámbrico AC750 C20 Dual Band Tp-Link',
    55.82,
    true,
    'conectividad',
    true,
);
const router850n = new Products(
    'router850n.jpg',
    'Router Inalámbrico TL-WR850N 300mbps Tp-Link',
    46.24,
    true,
    'conectividad',
    false,
);
const routerAdsl = new Products(
    'routerAdslW8961N.jpg',
    'Router ADSL Inalámbrico TD-W8961N 300mbps Tp-Link',
    40,
    true,
    'conectividad',
    false,
);

// CATEGORIA DISCOS SOLIDOS
const gigabyte480 = new Products(
    'ssd480Gigabyte.png',
    'Disco Sólido SATA 480gb Gigabyte',
    70.55,
    false,
    'discos sólidos'
);
const gigabyte240 = new Products(
    'ssd240Gigabyte.png',
    'Disco Sólido SATA 240gb Gigabyte',
    50.58,
    false,
    'discos sólidos',
);
const gigabyte120 = new Products(
    'ssd120Gigabyte.png',
    'Disco Sólido SATA 120gb Gigabyte',
    35.91,
    false,
    'discos sólidos',    
);
const ssd480kingston = new Products(
    'ssdA400480gb.jpg',
    'Disco Sólido SATA 480gb Kingston',
    74.8,
    false,
    'discos sólidos',
);
const ssd240Msi = new Products(
    'ssd240Msi.png',
    'Disco Sólido SATA 240gb MSI',
    72.88,
    true,
    'discos sólidos',
    true,
);

// CATEGORIA PARLANTES
const geniusHf280 = new Products(
    'parlanteGeniusHF280.png',
    'Parlantes 2.0 USB Genius 6w SP-HF280',
    25.39,
    true,
    'parlantes',
    false,
);

// CATEGORIA TECLADOS
const gigabyteKm6300 = new Products(
    'kitGigabyte.png',
    'Tec+Mou Usb Inglés Gigabyte Km6300',
    18.01,
    true,
    'teclados',
    true,
);
const tecladoGeniusKb117 = new Products(
    'tecGeniusKb117.webp',
    'Teclado Usb Español KB-117 Genius',
    16.32,
    true,
    'teclados',
    false,
);
const tecladoGameMaxK207 = new Products(
    'tecladoGameMaxK207.webp',
    'Teclado Usb Español K207 GameMax',
    27.05,
    true,
    'teclados',
    true,
);
const tecladoNumGenius110 = new Products(
    'tecladoNumPadGenius110.jpg',
    'Teclado Numeral Usb NumPad110 Genius',
    17.88,
    true,
    'teclados',
    false,
);

// CATEGORIA MOUSES
const trustYvi = new Products(
    'mouseTrust.png',
    'Mouse inalámbrico Trust YVI ambidiestro',
    16.15,
    true,
    'mouses',
    true,
);
const geniusEco = new Products(
    'geniusEco8100.jpeg',
    'Mouse Inalámbrico Eco-8100 recergable Genius',
    24.23,
    true,
    'mouses',
    true,
);
const mouGeniusScorpion = new Products(
    'mouseGeniusScorpion.jpg',
    'Mouse Gamer Scorpion M8-610 Genius',
    30.76,
    true,
    'mouses',
    false,
);
const mouGenius = new Products(
    'geniusDX110.jpg',
    'Mouse Usb óptico DX-120 Genius',
    7.34,
    true,
    'mouses',
    false,
);
const mouGeniusMicro = new Products(
    'geniusMicro900s.jpg',
    'Mouse Inalámbrico MicroTraveler 900s Genius',
    27.15,
    true,
    'mouses',
    false,
);
const mouGeniusMicroT = new Products(
    'geniusMicroTraveler.jpg',
    'Mouse Retráctil MicroTraveler Genius',
    6.78,
    true,
    'mouses',
    false,
);
const mouGameMaxMg7 = new Products(
    'mouseGameMaxMg7.png',
    'Mouse + Pad Gamer MG7 GameMax',
    38.41,
    true,
    'mouses',
    false,
);

// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS CON STOCK EN SECCION PROMOS WEB. LAS INSTANCIAS DE PRODUCTOS RENDERIZADAS SERáN UNICAMENTE LAS QUE TENGAN LA PROPIEDAD STOCK EN TRUE.

export default { productsPromo, productsCategory, searchCategory };