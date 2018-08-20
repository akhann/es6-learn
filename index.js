class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    show() {
        console.log(this.name + ': ' + this.price);
    }
}

const product = new Product('Pencil', 14);
product.show();

