import { Component } from '@angular/core';

import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  counter = 0;

  constructor(private storeServices: StoreService) {}

  ngOnInit(): void {
    this.storeServices.cartItem$.subscribe((products) => {
      this.counter = products.length;
    });
  }
}
