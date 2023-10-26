import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { CategoriesComponent } from './pages/categories/components/categories/categories.component';
import { CategoryFormComponent } from './pages/categories/components/category-form/category-form.component';
import { ProductsComponent } from './pages/products/components/products/products.component';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, BasicFormComponent, CategoriesComponent, CategoryFormComponent, ProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
