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
    76.83,
    true,
    'auriculares',
    true,
);
const auriGenius04S = new Products(
    'geniusHs04S.jpg',
    'Auricular c/mic HS-04S Genius (single jack)',
    30.06,
    true,
    'auriculares',
    false,
);
const geniusHsM900Bt = new Products(
    'hsM900BT.jpg',
    'Auricular c/mic bluetooth HS-M900BT Genius',
    31.06,
    true,
    'auriculares',
    true,
);
const auriGeniusHs200c = new Products(
    'geniusHs200C.jpg',
    'Auricular c/mic HS-200C Genius (PC-doble jack)',
    13.5,
    true,
    'auriculares',
    false,
);

// CATEGORIA CONECTIVIDAD
const usbWifiPerfonmance = new Products(
    'usbWifi300.png',
    'Wifi usb 300mbps 2.4Ghz Realtek8192 Perfonmance',
    17,
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
    24.39,
    true,
    'conectividad',
    false,
);
const tpLinkDecoM5 = new Products(
    'decoM5.jpg',
    'Sistema WIFI Deco M5 AC1300 Mesh Tp-Link',
    222.27,
    true,
    'conectividad',
    false,
);
const router841HP = new Products(
    'tl-wr841hp.jpg',
    'Router Inalámbrico TL-WR841HP 300Mbps Tp-Link',
    107.98,
    true,
    'conectividad',
    false,
);
const router940n = new Products(
    'routerWR940N.jpg',
    'Router Inalámbrico TL-WR940N 450mbps Tp-Link',
    69.15,
    false,
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
const hikvision240 = new Products(
    'ssd240gbHikvision.jpg',
    'Disco Sólido SATA 240gb Hikvision',
    56.4,
    true,
    'discos sólidos',
    true,
);
const gigabyte120 = new Products(
    'ssd120Gigabyte.png',
    'Disco Sólido SATA 120gb Gigabyte',
    61.48,
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
    81.9,
    true,
    'discos sólidos',
    true,
);

// CATEGORIA FUENTES
const fuenteATX550WPerf = new Products(
    'fuenteATX550WPerf.jpg',
    'Fuente ATX 550W sataX4 Perfonmance',
    42.47,
    true,
    'fuentes',
    false,
);
const fuenteATX600WCX = new Products(
    'fuenteATX600WCX.jpg',
    'Fuente ATX 600W sataX4 CX',
    48.49,
    true,
    'fuentes',
    false,
);
const fuenteSlim600WCX = new Products(
    'fuenteSlim600WCX.jpeg',
    'Fuente Slim 600W sataX4 p/GabSlim CX',
    53.09,
    true,
    'fuentes',
    false,
);

// CATEGORIA MEMORIAS FLASH
const usbSandisk32UltraShift = new Products(
    'usbSandisk32gbUltraShift.jpg',
    'Pen Drive usb 32gb UltraShift Sandisk',
    20.25,
    true,
    'memorias flash',
    false,
);
const usbSandisk64UltraShift = new Products(
    'usbSandisk64gbUltraShift.jpg',
    'Pen Drive usb 64gb UltraShift Sandisk',
    28.8,
    true,
    'memorias flash',
    false,
);
const usbKingston32gbC = new Products(
    'kingstonDT7032Gb.jpg',
    'Pen Drive usb-C 32gb DT70 Kingston',
    18,
    true,
    'memorias flash',
    false,
);
const microSdSandisk32gb = new Products(
    'microSd32gbSandisk.webp',
    'Micro Sd 32gb c/adap clase10 Sandisk',
    21.43,
    true,
    'memorias flash',
    false,
);

// CATEGORIA MOUSES
const trustYvi = new Products(
    'mouseTrust.png',
    'Mouse inalámbrico Trust YVI ambidiestro',
    18.64,
    true,
    'mouses',
    true,
);
const geniusEco = new Products(
    'geniusEco8100.jpeg',
    'Mouse Inalámbrico Eco-8100 recergable Genius',
    32.62,
    true,
    'mouses',
    true,
);
const mouGeniusScorpion = new Products(
    'mouseGeniusScorpion.jpg',
    'Mouse Gamer Scorpion M8-610 Genius',
    33.76,
    true,
    'mouses',
    false,
);
const mouGenius = new Products(
    'geniusDX110.jpg',
    'Mouse Usb óptico DX-120 Genius',
    9.88,
    true,
    'mouses',
    false,
);
const mouGeniusMicro = new Products(
    'geniusMicro900s.jpg',
    'Mouse Inalámbrico MicroTraveler 900s Genius',
    36.49,
    true,
    'mouses',
    false,
);
const mouGeniusMicroT = new Products(
    'geniusMicroTraveler.jpg',
    'Mouse Retráctil MicroTraveler Genius',
    8,
    true,
    'mouses',
    false,
);
const mouGameMaxMg7 = new Products(
    'mouseGameMaxMg7.png',
    'Mouse + Pad Gamer MG7 GameMax',
    40.93,
    true,
    'mouses',
    false,
);

// CATEGORIA PARLANTES
const geniusHf280 = new Products(
    'parlanteGeniusHF280.png',
    'Parlantes 2.0 USB Genius 6w SP-HF280',
    30.46,
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
    19.05,
    true,
    'teclados',
    false,
);
const tecladoGameMaxK207 = new Products(
    'tecladoGameMaxK207.webp',
    'Teclado Usb Español K207 GameMax',
    30.67,
    true,
    'teclados',
    true,
);
const tecladoNumGenius110 = new Products(
    'tecladoNumPadGenius110.jpg',
    'Teclado Numeral Usb NumPad110 Genius',
    20.86,
    true,
    'teclados',
    false,
);

// CATEGORIA TINTAS
const botellaEpsonT544 = new Products(
    'epsonT544.png',
    'Botellas de Tinta T544 Epson original packX4',
    126.69,
    true,
    'tintas',
    true,
);
const botellaEpsonT664 = new Products(
    'EpsonT664.jpg',
    'Botella de Tinta T664 Epson original packX4',
    147.68,
    true,
    'tintas',
    true,
);
const botellaBrotherBT5001 = new Products(
    'botellaBrotherBT5001.webp',
    'Botellas de Tinta BT5001 Brother original c/u',
    15.57,
    true,
    'tintas',
    false,
);
const botellaBrother60BK = new Products(
    'tintaBrother60BK.jpg',
    'Botella de Tinta 60BK Brother original',
    20.85,
    true,
    'tintas',
    false,
);
const botellaBrotherBT6001 = new Products(
    'tintaBrotherBT6001.jpg',
    'Botella de Tinta BT6001 Brother original',
    33.85,
    true,
    'tintas',
    false,
);
const cartuchoEpsonT073 = new Products(
    'cartuchoEpsonT073.webp',
    'Cartucho de Tinta T073 Epson original',
    15,
    true,
    'tintas',
    false,
);
const cartuchoKodak10 = new Products(
    'cartuchoKodak10.jpg',
    'Cartucho de Tinta 10 Kodak original c/u',
    14.12,
    true,
    'tintas',
    false,
);
const cartuchoAlterHp56Y57 = new Products(
    'alterGneissHP.jpg',
    'Cartuchos Alternativos p/HP 56/57 Gneiss (02/2022)',
    84.74,
    true,
    'tintas',
    false,
);
const botellaBrohter60bkBt5001 = new Products(    
    'brother60bk-bt5001pack.jpg',
    'Botellas de Tinta 60BK+BT5001 Brother original packX4',
    61.68,
    true,
    'tintas',
    false,
);
const botellaBrotherBt6001Bt5001 = new Products(
    'bt6001-bt5001-x4.jpeg',
    'Botellas de Tinta BT6001+BT5001 Brother original packX4',
    83.29,
    true,
    'tintas',
    false,
);

// CATEGORIA TONER
const tonerAlterBrotherTn1060 = new Products(
    'tonerAlterTn1060.jpg',
    'Tóner Alternativo p/Brother TN1060 Tecnovibe',
    18.40,
    false,
    'tóner',
    false,
);
const tonerAlterBrotherTn660 = new Products(
    'tonerAlterTn660.jpg',
    'Tóner Alternativo p/Brother TN660/2340/2370 GTC',
    22.38,
    true,
    'tóner',
    false,
);
const tonerAlterBrotherTn580 = new Products(
    'tonerAlterTn660.jpg',
    'Tóner Alternativo p/Brother TN580/650 GTC',
    22.38,
    true,
    'tóner',
    false,
);
const tonerAlterHp279A = new Products(
    'tonerAlterCF279A.avif',
    'Tóner Alternativo p/HP CF279A GTC',
    18.79,
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
    38.34,
    false,
    'varios',
    false,
);
const powerBank2600TRV = new Products(
    'powerBank2600mahTRV.jpg',
    'Cargador Portátil 2600mah TRV',
    16.94,
    true,
    'varios',
    false,
);
const cargadorInalambricoT1000 = new Products(
    'CargadorInalambricoPerformanceT1000.jpeg',
    'Cargador Inalámbrico T1000 Perfonmance',
    22.27,
    true,
    'varios',
    false,
);
const cableDisplayPortNisuta = new Products(
    'cableDisplayPortNisuta.webp',
    'Cable DisplayPort a HDMI 1.8m NS-CADPHD Nisuta',
    48.1,
    true,
    'varios',
    false,
);


// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS CON STOCK EN SECCION PROMOS WEB. LAS INSTANCIAS DE PRODUCTOS RENDERIZADAS SERáN UNICAMENTE LAS QUE TENGAN LA PROPIEDAD STOCK EN TRUE.

//export default { productsPromo, productsCategory, searchCategory };