import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-my-oder',
  templateUrl: './my-oder.component.html',
  styleUrls: ['./my-oder.component.scss'],
})
export class MyOderComponent {
  products$: Observable<Product[]>;

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
  }
}
