import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shoppingCart: Product[] = [];
  private cartItem = new BehaviorSubject<Product[]>([]);

  cartItem$ = this.cartItem.asObservable();

  constructor() {}

  addProductToCart(product: Product) {
    this.shoppingCart.push(product);
    this.cartItem.next(this.shoppingCart);
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  getTotal() {
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
