import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductEditComponent,
    ProductCreateComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
