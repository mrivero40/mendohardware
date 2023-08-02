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
    15,
    true,
    'conectividad',
    true,
);
const usbWifiTenda300 = new Products(
    'usbWifi300Tenda.webp',
    'Wifi usb 300mbps U3 11n 2.4ghz Tenda',
    14,
    true,
    'conectividad',
    true,
);

// CATEGORIA DISCOS SOLIDOS

const hikvision240 = new Products(
    'ssd240gbHikvision.png',
    'Disco Sólido SATA 240gb Hikvision',
    46,
    true,
    'discos sólidos',
    true,
);
const gigabyte120 = new Products(
    'ssd120Gigabyte.png',
    'Disco Sólido SATA 120gb Gigabyte',
    52,
    true,
    'discos sólidos',
    true,
);
const ssd240Msi = new Products(
    'ssd240Msi.png',
    'Disco Sólido SATA 240gb MSI',
    56.4,
    true,
    'discos sólidos',
    false,
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
    17,
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
    'Mouse Inalámbrico Eco-8100 recargable Genius',
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
const mouLogitechM110 = new Products(
    'mouseLogitechM110-red.webp',
    'Mouse USB silencioso M110 Logitech',
    20.22,
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
    'kitGigabyte.webp',
    'Tec+Mou Usb Inglés Gigabyte Km6300',
    18.01,
    true,
    'teclados',
    true,
);
const tecladoGameMaxK207 = new Products(
    'tecladoGameMaxK207.webp',
    'Teclado Usb Español K207 GameMax',
    27.05,
    true,
    'teclados',
    false,
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
    187.5,
    true,
    'tintas',
    true,
);
const botellaEpsonT664 = new Products(
    'EpsonT664.jpg',
    'Botella de Tinta T664 Epson original packX4',
    187.5,
    true,
    'tintas',
    false,
);
const botellaBrotherBT5001 = new Products(
    'botellaBrotherBT5001.webp',
    'Botellas de Tinta BT5001 Brother original c/u',
    14,
    true,
    'tintas',
    false,
);
const botellaBrother60BK = new Products(
    'tintaBrother60BK.jpg',
    'Botella de Tinta 60BK Brother original',
    18.07,
    true,
    'tintas',
    false,
);
const botellaBrotherBT6001 = new Products(
    'tintaBrotherBT6001.jpg',
    'Botella de Tinta BT6001 Brother original',
    18.07,
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
    58.56,
    true,
    'tintas',
    false,
);
const botellaBrotherBt6001Bt5001 = new Products(
    'bt6001-bt5001-x4.jpeg',
    'Botellas de Tinta BT6001+BT5001 Brother original packX4',
    58.56,
    true,
    'tintas',
    false,
);

// CATEGORIA TONER
const tonerAlterBrotherTn1060 = new Products(
    'tonerAlterTn1060.jpg',
    'Tóner Alternativo p/Brother TN1060 Tecnovibe',
    18.40,
    true,
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
const zapatillaTRV5x220 = new Products (
    'prolongadorTRV5x220.webp',
    'Prolongador Múltiple TRV 5x220v 1.5mts switch',
    18,
    true,
    'varios',
    false,
)


// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS CON STOCK EN SECCION PROMOS WEB. LAS INSTANCIAS DE PRODUCTOS RENDERIZADAS SERáN UNICAMENTE LAS QUE TENGAN LA PROPIEDAD STOCK EN TRUE.

//export default { productsPromo, productsCategory, searchCategory };