// Order.js
class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}