import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';
import { MyValidators } from 'src/app/utils/validators';
import { TokenService } from 'src/app/services/token/token.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.buildForm();
  }

  register(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.usersService
        .createUser({
          name: value.name,
          email: value.email,
          password: value.password,
          role: value.role,
          avatar: value.avatar,
        })
        .subscribe((rta) => {
          this.router.navigate(['login']);
          console.log(rta);
        });
    }

    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/),
          ],
        ],
        role: ['', [Validators.required]],
        avatar: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            MyValidators.validPassword,
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: MyValidators.matchPasswords,
      }
    );

    this.roleField?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  get nameField() {
    return this.form.get('name');
  }
  get emailField() {
    return this.form.get('email');
  }
  get passwordField() {
    return this.form.get('password');
  }
  get confirmPasswordField() {
    return this.form.get('confirmPassword');
  }
  get roleField() {
    return this.form.get('role');
  }
  get avatarField() {
    return this.form.get('avatar');
  }
}
