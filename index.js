const Product = require('./product');
const Order = require('./order');


const data = [ { name: 'Pencil', price: 14 }, { name: 'Casing', price: 17 }];

setTimeout(function() {
    const product1 = new Product(data[0].name, data[0].price);
    const product2 = new Product(data[1].name, data[1].price);

    const order = new Order();
    order.add(product1);
    order.add(product2);

    order.showTotal();
}, 400);


