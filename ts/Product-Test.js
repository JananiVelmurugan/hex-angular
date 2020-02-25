"use strict";
exports.__esModule = true;
var ProductTest = /** @class */ (function () {
    function ProductTest(product) {
        this.product = product;
    }
    ProductTest.prototype.display = function () {
        console.log(this.product.id);
        console.log(this.product.supplier.id);
    };
    return ProductTest;
}());
// let test: ProductTest;
// test=new ProductTest();
var product = { "id": 1, "name": "Hero Pen", "quantity": 10, "supplier": { "id": 101, "name": "Park" } };
var obj = new ProductTest(product);
obj.display();
