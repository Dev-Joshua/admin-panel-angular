import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  token = '';
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private usersService: UsersService,
    private tokenService: TokenService
  ) {
    this.buildForm();
  }

  ngOnInit() {
    const token = this.tokenService.getToken();
    if (token) {
      this.authService.getProfile().subscribe();
    }
  }

  register(event: Event): void {
    // event.preventDefault();
    // if (this.form.valid) {
    //   this.usersService
    //     .createUser({
    //       name: '',
    //       email: '',
    //       password: '',
    //       role: '',
    //     })
    //     .subscribe((rta) => {
    //       console.log(rta);
    //     });
    // }
    console.log(this.form.value);
  }

  // login() {
  //   this.authService
  //   .login(this.form., this.form.password)
  //   .subscribe((user) => {
  //     this.profile = user;
  //   });
  // }

  private buildForm() {
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [Validators.required],
          Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/),
        ],
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
        role: [''],
      },
      {
        validators: MyValidators.matchPasswords,
      }
    );
  }
}
