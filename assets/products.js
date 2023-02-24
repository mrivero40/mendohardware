const urlImg = 'https://mendohardware.com.ar/img/';

// IMPLEMENTACION DE PRODUCTOS EN OBJETOS


class Products {
    constructor( image, name, price ) {
        this.image = urlImg + image;
        this.name = name;
        this.price = price;
    };
};

const epsonT544 = new Products(
    'epsonT544.png',
    'Botella de Tinta Epson T544 original c/u',
    18.9,
);
const xiaomiLite3 = new Products(
    'xiaomiRedmiLite3.png',
    'Auricular bluetooth Xiaomi Redmi Buds 3 Lite',
    29.23,
);
const xiaomiEarBasic2 = new Products(
    'xiaomiEarphonesBasic2.png',
    'Auricular bluetooth Xiaomi Earphones Basic 2',
    41.12,
);
const gigabyte480 = new Products(
    'ssd480Gigabyte.png',
    'Disco Sólido SATA 480gb Gigabyte',
    70.55,
);
const msiGh30 = new Products(
    'auricularMsiGamer.png',
    'Auricular gamer Msi Inmerse Gh30',
    57.91,
);
const gigabyteKm6300 = new Products(
    'kitGigabyte.png',
    'Kit Tec+Mou usb Gigabyte Km6300 (inglés)',
    19.36,
);
const perfonmanceWifi = new Products(
    'usbWifi300.png',
    'Wifi usb 300mbps Perfonmance 2.4Ghz Realtek 8192',
    10.78,
);
const trustYvi = new Products(
    'mouseTrust.png',
    'Mouse inalámbrico Trust YVI ambidiestro',
    13.18,
);
const gigabyte240 = new Products(
    'ssd240Gigabyte.png',
    'Disco Sólido SATA 240gb Gigabyte',
    50.58,
);
const geniusHf280 = new Products(
    'parlanteGeniusHF280.png',
    'Parlantes 2.0 USB Genius 6w SP-HF280',
    20.34,
);
const gigabyte120 = new Products(
    'ssd120Gigabyte.png',
    'Disco Sólido SATA 120gb Gigabyte',
    35.91,
);
const tpLinkDecoM5 = new Products(
    'decoM5.jpg',
    'Sistema WIFI Deco M5 AC1300 Mesh',
    112.4,
);
const geniusHsM900Bt = new Products(
    'hsM900BT.jpg',
    'Auricular bluetooth Genius HS-M900BT',
    19.5,
);



// RENDERIZADO EN HTML A PARTIR DE ARRAY DE PRODUCTOS SECCION PROMOS WEB

const productsPromo = [gigabyte240, geniusHsM900Bt, tpLinkDecoM5, gigabyte120, epsonT544, xiaomiEarBasic2, msiGh30, perfonmanceWifi, trustYvi, geniusHf280, gigabyteKm6300,];

export default productsPromo;