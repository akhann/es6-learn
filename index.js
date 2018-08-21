const Order = require('./order');
const ProductService = require('./product_service');

const service = new ProductService();
let products = [];

service.getList().then(function(result) {
    products = result;
    const order = new Order();

    for (var i = 0, len = products.length; i < len; i++) {
        order.add(products[i]);
    }

    order.showTotal();
}, function(err) {
    console.log(err);
});


