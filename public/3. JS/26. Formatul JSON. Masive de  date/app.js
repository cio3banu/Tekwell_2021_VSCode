let products = [
  {
    name: "Laptop",
    price: 2000
  },
  {
    name: "Telefon",
    price: 350
  },
  {
    name: "Automobil",
    price: 54000
  }
];

console.log(products);

const productsJSON = JSON.stringify(products);
console.log(productsJSON);


const productsJSONString = `[
  {
    "name": "Laptop",
    "price": 2000
  },
  {
    "name": "Telefon",
    "price": 350
  },
  {
    "name": "Automobil",
    "price": 54000
  }
]`;

products = JSON.parse(productsJSONString);
console.log(products);