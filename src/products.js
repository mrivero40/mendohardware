const urlImg = 'https://mendohardware.com.ar/img/';

// IMPLEMENTACION DE CLASES PARA PRODUCTOS A RENDERIZAR EN HTML SECTION PROMOS WEB A PARTIR DE ARRAY DE PRODUCTOS.

const productsPromo = [];

class Products {
    constructor( image, name, price, stock ) {
        this.image = urlImg + image;
        this.name = name;
        this.price = price;
        this.stock = stock;

        if(this.stock === true) {
            productsPromo.push(this);
        };
    };    
};

const epsonT544 = new Products(
    'epsonT544.png',
    'Botella de Tinta Epson T544 original c/u',
    20.35,
    true,
);
const xiaomiLite3 = new Products(
    'xiaomiRedmiLite3.png',
    'Auricular bluetooth Xiaomi Redmi Buds 3 Lite',
    29.23,
    false,
);
const xiaomiEarBasic2 = new Products(
    'xiaomiEarphonesBasic2.png',
    'Auricular bluetooth Xiaomi Earphones Basic 2',
    41.12,
    false,
);
const gigabyte480 = new Products(
    'ssd480Gigabyte.png',
    'Disco Sólido SATA 480gb Gigabyte',
    70.55,
    false,
);
const msiGh30 = new Products(
    'auricularMsiGamer.png',
    'Auricular gamer Msi Inmerse Gh30',
    67.38,
    true,
);
const gigabyteKm6300 = new Products(
    'kitGigabyte.png',
    'Kit Tec+Mou usb Gigabyte Km6300 (inglés)',
    24.18,
    true,
);
const perfonmanceWifi = new Products(
    'usbWifi300.png',
    'Wifi usb 300mbps Perfonmance 2.4Ghz Realtek 8192',
    13.39,
    true,
);
const trustYvi = new Products(
    'mouseTrust.png',
    'Mouse inalámbrico Trust YVI ambidiestro',
    16.15,
    true,
);
const gigabyte240 = new Products(
    'ssd240Gigabyte.png',
    'Disco Sólido SATA 240gb Gigabyte',
    50.58,
    false,
);
const geniusHf280 = new Products(
    'parlanteGeniusHF280.png',
    'Parlantes 2.0 USB Genius 6w SP-HF280',
    25.39,
    true,
);
const gigabyte120 = new Products(
    'ssd120Gigabyte.png',
    'Disco Sólido SATA 120gb Gigabyte',
    35.91,
    false,
);
const tpLinkDecoM5 = new Products(
    'decoM5.jpg',
    'Sistema WIFI Deco M5 AC1300 Mesh',
    134.90,
    true,
);
const geniusHsM900Bt = new Products(
    'hsM900BT.jpg',
    'Auricular bluetooth Genius HS-M900BT',
    23.22,
    true,
);
const ssd480kingston = new Products(
    'ssdA400480gb.jpg',
    'Disco Sólido SATA 480gb Kingston',
    74.8,
    false,
);
const ssd240Msi = new Products(
    'ssd240Msi.png',
    'Disco Sólido SATA 240gb MSI',
    72.88,
    true,
);
const geniusEco = new Products(
    'geniusEco8100.jpeg',
    'Mouse Inalámbrico Eco-8100 recergable Genius',
    24.23,
    true,
);
const router841HP = new Products(
    'tl-wr841hp.jpg',
    'Router Inalámbrico TL-WR841HP 300Mbps Tp-Link',
    80.21,
    true,
);

// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS CON STOCK EN SECCION PROMOS WEB. LAS INSTANCIAS DE PRODUCTOS RENDERIZADAS SERáN UNICAMENTE LAS QUE TENGAN LA PROPIEDAD STOCK EN TRUE.

export default productsPromo;