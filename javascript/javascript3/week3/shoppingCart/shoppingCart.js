class Product {
  constructor(name, price, currency) {
    this.name = name;
    this.price = price;
    this.currency = currency;
  }
  async convertToCurrency() {
    const resp = await fetch("https://api.exchangeratesapi.io/latest");
    const exchange = await resp.json();
    console.log(exchange);
  }
}
const body = document.querySelector("body");
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const remove = this.products.indexOf(product);
    this.products.slice(remove, 1);
  }

  searchProduct(productName) {
    let searchOutput = [];

    this.products.forEach((product) => {
      if (productName.toLowerCase() === product.name)
        searchOutput.push(product);
    });

    return searchOutput;
  }

  getTotal() {
    return this.products.reduce((total, product) => {
      total += product.price;
      return total;
    }, 0);
  }

  renderProducts() {
    const div = document.createElement("div");
    this.products.forEach((product) => {
      const p = document.createElement("p");
      p.innerHTML = `product:${product.name} - ${product.price} ${product.currency}`;
      div.appendChild(p);
      body.appendChild(div);
    });
    const p = document.createElement("p");
    const totalPrice = this.getTotal();
    p.innerHTML = `Total price (incl. VAT) ${totalPrice}`;
    div.appendChild(p);
  }

  async getUser() {
    const url = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const users = await url.json();
    const p = document.createElement("p");
    p.innerHTML = `${users.name}`;
    body.appendChild(p);
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 500, "EUR");
const usedComputer = new Product("computer", 700, "EUR");
const mobile = new Product("mobile", 400, "EUR");
const car = new Product("car", 1000, "EUR");

//adding product to cart
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(car);
shoppingCart.addProduct(usedComputer);

//removing a product
shoppingCart.removeProduct(flatscreen);

//total price
console.log(shoppingCart.getTotal());
console.log(shoppingCart.products);

//rendering product name and its price and user
shoppingCart.renderProducts();

//getting users
shoppingCart.getUser();

//To convert currency
const iphone = new Product("iphone", 1000);
console.log(iphone.convertToCurrency("DKK"));
