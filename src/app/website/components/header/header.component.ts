import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';

import { StoreService } from 'src/app/services/store/store.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  profile: User | null = null;
  total$: Observable<number>;
  counter = 0;

  constructor(
    private storeServices: StoreService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  ngOnInit(): void {
    this.storeServices.cartItem$.subscribe((products) => {
      this.counter = products.length;
    });
    this.authService.user$.subscribe((data) => {
      this.profile = data;
    });
  }

  // login() {
  //   this.router.navigate(['/login']);
  // }

  logout() {
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home']);
  }
}
