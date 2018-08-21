const Product = require('./product');
const { Observable } = require('rxjs');

class ProductService {
    constructor() {
        this.data = [
            new Product('Pencil', 14),
            new Product('Casing', 24),
        ];
    }

    getList() {
        return new Observable((observer) => {

            setInterval(() => {
                if (this.data.length > 0) {
                    this.data[0].price += 1;
                    observer.next(this.data);
                }
                else {
                    observer.error('No product found');
                }
            }, 800);
        });
    }
}

module.exports = ProductService;
