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
    construct() {
        this.items = [];
    }

    add(product) {
        item.push(product);
    }

    showTotal() {
        console.log('Order Total', this.calculateTotal());
    }

    calculateTotal() {
        var sum = 0;

        for (var i = 0, len = this.items; i < len; i++) {
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

showTotal();

