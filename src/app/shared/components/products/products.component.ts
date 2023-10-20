import { Component, Input } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  products: Product[] = [];

  clickOnProduct(id: string) {
    console.log('product');
    console.log(id);
  }
}
