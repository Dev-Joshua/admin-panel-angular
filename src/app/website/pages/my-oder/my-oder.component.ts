import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  form!: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.products$ = this.cartService.cart$;
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: this.formBuilder.array([]),
    });
  }

  addAddressField() {
    this.addressField.push(this.createAddressField());
  }

  private createAddressField() {
    return this.formBuilder.group({
      zip: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  get addressField() {
    return this.form.get('address') as FormArray;
  }

  save() {
    console.log(this.form.value);
  }
}
