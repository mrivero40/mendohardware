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


// LISTA DE PRODUCTOS - PRODUCTS LIST

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
    false,
    'conectividad',
    false,
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
    47.35,
    true,
    'discos sólidos',
    true,
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

// CATEGORIA FUENTES
const fuenteATX550WPerf = new Products(
    'fuenteATX550WPerf.jpg',
    'Fuente ATX 550W sataX4 Perfonmance',
    37.53,
    true,
    'fuentes',
    false,
);
const fuenteATX600WCX = new Products(
    'fuenteATX600WCX.jpg',
    'Fuente ATX 600W sataX4 CX',
    40.49,
    true,
    'fuentes',
    false,
);
const fuenteSlim600WCX = new Products(
    'fuenteSlim600WCX.jpeg',
    'Fuente Slim 600W sataX4 p/GabSlim CX',
    45,
    true,
    'fuentes',
    false,
);

// CATEGORIA MEMORIAS FLASH
const usbSandisk32UltraShift = new Products(
    'usbSandisk32gbUltraShift.jpg',
    'Pen Drive usb 32gb UltraShift Sandisk',
    18.09,
    true,
    'memorias flash',
    false,
);
const usbSandisk64UltraShift = new Products(
    'usbSandisk64gbUltraShift.jpg',
    'Pen Drive usb 64gb UltraShift Sandisk',
    23.53,
    true,
    'memorias flash',
    false,
);
const usbKingston32gbC = new Products(
    'kingstonDT7032Gb.jpg',
    'Pen Drive usb-C 32gb DT70 Kingston',
    11.94,
    true,
    'memorias flash',
    false,
);
const microSdSandisk32gb = new Products(
    'microSd32gbSandisk.webp',
    'Micro Sd 32gb c/adap clase10 Sandisk',
    16.61,
    true,
    'memorias flash',
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

// CATEGORIA TINTAS
const botellaEpsonT544 = new Products(
    'epsonT544.png',
    'Botellas de Tinta T544 Epson original packX4',
    98.59,
    true,
    'tintas',
    true,
);
const botellaEpsonT664 = new Products(
    'EpsonT664.jpg',
    'Botella de Tinta T664 Epson original c/u',
    29.58,
    true,
    'tintas',
    true,
);
const botellaBrotherBT5001 = new Products(
    'botellaBrotherBT5001.webp',
    'Botellas de Tinta BT5001 Brother original',
    12.61,
    true,
    'tintas',
    false,
);
const botellaBrother60BK = new Products(
    'tintaBrother60BK.jpg',
    'Botella de Tinta 60BK Brother original',
    16.89,
    true,
    'tintas',
    false,
);
const botellaBrotherBT6001 = new Products(
    'tintaBrotherBT6001.jpg',
    'Botella de Tinta BT6001 Brother original',
    19.5,
    true,
    'tintas',
    false,
);
const cartuchoEpsonT073 = new Products(
    'cartuchoEpsonT073.webp',
    'Cartucho de Tinta T073 Epson original',
    13.96,
    true,
    'tintas',
    false,
);
const cartuchoKodak10 = new Products(
    'cartuchoKodak10.jpg',
    'Cartucho de Tinta 10 Kodak original',
    11.11,
    true,
    'tintas',
    false,
);
const cartuchoAlterHp56Y57 = new Products(
    'alterGneissHP.jpg',
    'Cartuchos Alternativos p/HP 56/57 Gneiss',
    41.01,
    true,
    'tintas',
    false,
);


// CATEGORIA TONER
const tonerAlterBrotherTn1060 = new Products(
    'tonerAlterTn1060.jpg',
    'Tóner Alternativo p/Brother TN1060 Tecnovibe',
    15.94,
    true,
    'tóner',
    false,
);
const tonerAlterBrotherTn660 = new Products(
    'tonerAlterTn660.jpg',
    'Tóner Alternativo p/Brother TN660/2340/2370 GTC',
    20.27,
    true,
    'tóner',
    false,
);
const tonerAlterBrotherTn580 = new Products(
    'tonerAlterTn660.jpg',
    'Tóner Alternativo p/Brother TN580/650 GTC',
    20.27,
    true,
    'tóner',
    false,
);
const tonerAlterHp279A = new Products(
    'tonerAlterCF279A.avif',
    'Tóner Alternativo p/HP CF279A GTC',
    18.01,
    true,
    'tóner',
    false,
);
const tonerAlterHp255A = new Products(
    'tonerAlterCE255A.jpg',
    'Tóner Alternativo p/HP CE255A Perfonmance',
    22.52,
    true,
    'tóner',
    false,
);

// CATEGORIA VARIOS
const carryDiskAdata = new Products(
    'carryDiskAdataAED600.jpg',
    'Carry Disk 2.5" Sata AED600 Adata',
    32.85,
    true,
    'varios',
    false,
);
const powerBank2600TRV = new Products(
    'powerBank2600mahTRV.jpg',
    'Cargador Portátil 2600mah TRV',
    13.51,
    true,
    'varios',
    false,
);
const cargadorInalambricoT1000 = new Products(
    'CargadorInalambricoPerformanceT1000.jpeg',
    'Cargador Inalámbrico T1000 Perfonmance',
    20.27,
    true,
    'varios',
    false,
);
const cableDisplayPortNisuta = new Products(
    'cableDisplayPortNisuta.webp',
    'Cable DisplayPort a HDMI 1.8m NS-CADPHD Nisuta',
    45,
    true,
    'varios',
    false,
);


// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS CON STOCK EN SECCION PROMOS WEB. LAS INSTANCIAS DE PRODUCTOS RENDERIZADAS SERáN UNICAMENTE LAS QUE TENGAN LA PROPIEDAD STOCK EN TRUE.

//export default { productsPromo, productsCategory, searchCategory };