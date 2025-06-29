// --- Functional programing Way ---

const product = {
  id: 123,
  name: "Over-Ear Headphones",
  price: 300,
  currency: "eur",
};

const getTotalProductPrice = (baseprice, hasPremiumSubscription);
{
  if (hasPremiumSubscription === true) return baseprice;

  return baseprice * 1.02;
}

const totalPrice = getTotalProductPrice(product.price, false);

// --- Object oriented programing (OOP)---
class Product {
  constructor(id, name, price, currency) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.currency = currency;
  }

  getTotalProductPrice(hasPremiumSubscription) {
    if (hasPremiumSubscription === true) return this.price;

    return this.price * 1.02;
  }

  getFormatedPrice() {
    return this.price + " " + this.currency;
  }
}

const productOne = new Product(
  product.id,
  product.name,
  product.price,
  product.currency
);

const productTwo = new Product(873, "Laptop MacBook", 8000, "Ron");

// cand ai ceva.altceva => ceva este un obiect
// --- Object wrapper ---
// La mementul executiei codului javasacriptului iti infasoara o valoare
// in object wrapper-ul asociat tipului de data al acelei valori.

// De ce? Un object wrapper vine cu proprietati si metode utile .

class String {
  constructor(value) {
    this.value = value;
  }
  includes(searchedString) {
    //   Logica care cauta searched string in this.value
  }
  toUpperCase() {
    // logica care iti converteste this.value la caractere cu uppercase
  }
}

let password = new String("lambojambo");

console.log(password.length);
