// Creaying the array of products and took this from SmartPhoneProducts3

products = [
    {
        //Product 1
    "product": "Canele",
    "price": 4.00,
    "image": "./images/Canele.png"
    },
    {
        //Product 2
    "product": "Croissant",
    "price": 5.00,
    "image": "./images/Croissant.png"
    },
    {
        //Product 3
    "product" : "Macarons",
    "price": 3.00,
    "image": "./images/Macarons.png"
    },
    {
        //Product 4
    "product": "Madeline",
    "price": 2.00,
    "image": "./images/Madeline.png" 
    },
    {
        //Product 5
    "product": "Pain du Chocolat",
    "price": 7.00,
    "image": "./images/PainDuChocolat.png" 
        }
];


if(typeof module != 'undefined') { //if the type of the module is defined
    module.exports.products = products; //export the product_data
  }