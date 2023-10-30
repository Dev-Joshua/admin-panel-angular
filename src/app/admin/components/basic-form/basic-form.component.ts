import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    date: new FormControl(''),
    age: new FormControl(18),
    color: new FormControl('#000'),
    category: new FormControl(''),
    tag: new FormControl(''),
    agree: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl(''),
  });

  // ngOnInit(): void {
  //   this.nameField.valueChanges.subscribe((value) => {
  //     console.log(value);
  //   });
  // }

  submit(event: Event): void {
    if (this.form.invalid) {
      this.form.controls.name.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }

  //Obtener valores de manera reactiva de cualquier formulario en HTML
  getNameValue() {
    console.log(this.nameField!.value);
  }

  get isNameFieldValid() {
    return this.nameField!.touched && this.nameField!.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField!.touched && this.nameField!.invalid;
  }

  get nameField() {
    return this.form.get('name');
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }
}
