import { Component, Input } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [];

  clickOnProduct(id: string) {
    console.log('product');
    console.log(id);
  }
}
