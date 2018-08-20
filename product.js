class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    show() {
        console.log(this.name + ': ' + this.price);
    }
}

module.exports = Product;
