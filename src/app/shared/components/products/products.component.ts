import { Component, Input } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [];
  shoppingCart: Product[] = [];
  total = 0;
  showProductDetail = false;
  productChosen: Product | null = null;

  constructor(
    private productsService: ProductsService,
    private storeService: StoreService
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  addToShoppingCart(product: Product) {
    this.storeService.addProductToCart(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowProductDetail(id: string) {
    this.productsService.getProduct(id).subscribe((data) => {
      // console.log('product', data);
      this.toggleProductDetail();
      this.productChosen = data;
    });
  }
}
