import { Component } from '@angular/core';

import { StoreService } from 'src/app/services/store/store.service';
import { CartService } from 'src/app/services/cart/cart.service';

import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  total$: Observable<number>;
  counter = 0;

  constructor(
    private storeServices: StoreService,
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  ngOnInit(): void {
    this.storeServices.cartItem$.subscribe((products) => {
      this.counter = products.length;
    });
  }
}
