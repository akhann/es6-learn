class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    show() {
        console.log(this.name + ': ' + this.price);
    }
}

class Order {
    constructor() {
        this.items = [];
    }

    add(product) {
        this.items.push(product);
    }

    showTotal() {
        console.log('Order Total', this.calculateTotal());
    }

    calculateTotal() {
        let sum = 0;

        for (let i = 0, len = this.items.length; i < len; i++) {
            sum += this.items[i].price;
        }

        return sum;
    }
}

const product1 = new Product('Pencil', 14);
const product2 = new Product('Casing', 18);

const order = new Order();
order.add(product1);
order.add(product2);

order.showTotal();

