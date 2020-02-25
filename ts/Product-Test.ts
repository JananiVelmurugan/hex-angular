import { Product } from './Product'
class ProductTest {
  product: Product;
  constructor(product: Product) {
    this.product = product;
  }
  display() {
    console.log(this.product.id);
    console.log(this.product.supplier.id);
  }
}
// let test: ProductTest;
// test=new ProductTest();

let product = { "id": 1, "name": "Hero Pen", "quantity": 10, "supplier":{"id":101,"name":"Park"}}
let obj = new ProductTest(product);
obj.display();

