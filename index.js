const Product = require('./product');
const Order = require('./order');

const product1 = new Product('Pencil', 14);
const product2 = new Product('Casing', 18);

const order = new Order();
order.add(product1);
order.add(product2);

order.showTotal();

