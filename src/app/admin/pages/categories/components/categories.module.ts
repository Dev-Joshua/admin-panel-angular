import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';

import { MaterialModule } from 'src/app/material/material.module';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [CategoriesComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class CategoriesModule {}
