const PRODUCTS = [
    {
        id: 100,
        name: 'ReactProX Headset',
        price: 350,
        image: require('./images/lampp.png'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).',
        category: 'Chair'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: 600,
        image: require('./images/minimalstand.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.',
        category: 'Table'
        
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 4000,
        image: require('./images/chairrr.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.',
        category: 'ArmChair'
    },
    {
        id: 103,
        name: 'SweetHome Cupcake',
        price: 2200,
        image: require('./images/simpledesk.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.',
        category: 'Bed'
    },
    {
        id: 104,
        name: 'Sweet Cupcake',
        price: 2200,
        image: require('./images/simpledesk.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.',
        category: 'Lamp'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}
export function getProductC(category) {
    return PRODUCTS.filter((product) => (product.category == category));
}