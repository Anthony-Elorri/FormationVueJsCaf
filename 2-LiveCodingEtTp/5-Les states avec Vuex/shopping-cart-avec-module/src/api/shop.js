// Création d'une liste de produits

const _products = [
    {
        id: 1,
        title: "Ipad 4 mini",
        price: 350.01,
        inventory: 2,
        imgUrl: "img/IpadMini.jpg"
    },
    {
        id: 2,
        title: "Ipad 8 (10,2 Pouces)",
        price: 399,
        inventory: 5,
        imgUrl: "img/Ipad-10Pouces.png"
    },
    {
        id: 3,
        title: "Chargeur Ipad",
        price: 19.99,
        inventory: 10,
        imgUrl: "img/ChargeurIpadMini.jpg"
    },
    {
        id: 4,
        title: "House Ipad Mini",
        price: 19.99,
        inventory: 4,
        imgUrl: "img/HousseIpadMini.jpg"
    },
    {
        id: 5,
        title: "House Ipad 8",
        price: 24.99,
        inventory: 6,
        imgUrl: "img/HousseIpad.jpg"
    }
];

export default {
    getProducts(cb) {
        setTimeout(() => cb(_products), 100);
    },

    buyProducts(_products, cb, errorCb) {
        setTimeout(() => {
            // Simule un checkout failure aléatoirement
            Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
        }, 100);
    }
};