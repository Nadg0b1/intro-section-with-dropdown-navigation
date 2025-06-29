//  -- Objects --
let productName = "laptop";
let productQuantity = 100;
let productPrice = 5000;
let productIsSoldOut = false;

let prodct = {
  name: "Laptop Macbook M1",
  quantity: 100,
  price: 5000,
  isSoldOut: false,
  related: ["Laptop Macbook M1", "Laptop Macbook M2"],
  //   vendorAdress: {
  //     street: "orasunou",
  //     town: "satu mare",
  //     streetNumber: 12,
  // },
};

// productIsSoldOut.vendorAdress.street;

// let user = {
//   username: "abcde",
//   numberOfFollowers: 333,
//   numberOfFollowing: 30,
// };

// Q: ce este un obiect?
// A: Un tip de data din JavaScript

// Q: la ce te ajuta un obiect?
// A: la gruparea unui set de informatii care se refera la ceasi entitate

// Q: Din ce este format un obiect?
// A: Din perechi key - value a.k.a proprietati

// Q: Cum accesez o informatie / valoare dintr-un obiect?
// A: accesand proprietatea in care sta acea valoare
// product.name;

// Q: Ce nume pot pune unei proprietati?
// A: orice doar sa fie folosita notatia camelcase

// Q: ce valoare poate contine o proprietate?
// A: orice valoare/ tip de data (number, string, boolean, array, obiect)
// product.related;

// Exercitiu:
//  Sa se creeze un obiect cu 4 proprietati:number, string, boolean , array

// let user = {
//   userName: "Bogdan",
//   numberOfFollowers: 1000,
//   isVip: true,
//   adress: ["Satu Mare", "Micula"],
// };

// Exercitiu:

let cartProducts = [
  {
    name: "Laptop",
    price: 5000,
    quantity: 1,
  },
  {
    name: "Whiskey",
    price: 6000,
    quantity: 2,
  },
  {
    name: "Vin",
    price: 7000,
    quantity: 1,
  },
];

// 1) Sa se scrie un algoritm care calculeaza totalul cartului

// let sum = 0;

// for (let i = 0; i < cartProduct.length; i++) {
//   sum += cartProducts[i].price * cartProducts[i].quantity;
// }

// daca totalul cartului este peste 1000 lei sa se afiseze un measj
// ai obtinut o reducere de 10% . Noul total este de: x lei

let sum = 0;

for (let i = 0; i < cartProduct.length; i++) {
  sum += cartProducts[i].price * cartProducts[i].quantity;
}
if (sum >= 1000) {
  sum * 0.9;
  alert(`Ai obtinut o reducere de 10% . Noul total este de: ${sum} lei `);
}

//  EX: 2
//  sa se scrie un algoritm care afiseaza in consola cel mai scump produs di cart

let max = cartProducts[0].price;

for (let i = 1; i < cartProducts.length; i++) {
  if (cartProducts[i].price > max) {
    max = cartProducts[i].price;
  }
}

console.log(max);
