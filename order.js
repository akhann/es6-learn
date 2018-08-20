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

module.exports = Order;
