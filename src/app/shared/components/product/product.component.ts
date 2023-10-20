import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    description: '',
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  addToCart() {
    this.addedProduct.emit(this.product);
  }

  showProductDetail() {
    this.showProduct.emit(this.product.id);
  }
}
