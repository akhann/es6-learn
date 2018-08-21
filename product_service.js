const Product = require('./product');

class ProductService {
    constructor() {
        this.data = [
            new Product('Pencil', 14),
            new Product('Casing', 24),
        ];
    }

    getList() {
        return new Promise((resolve, failure) => {
            setTimeout(() => {
                if (this.data.length > 0) {
                    resolve(this.data);
                }
                else {
                    failure('No product found.');
                }
            }, 2000);
        });
    }
}

module.exports = ProductService;
