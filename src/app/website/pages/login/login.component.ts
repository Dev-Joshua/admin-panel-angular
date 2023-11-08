import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  token = '';
  form!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
    const token = this.tokenService.getToken();
    if (token) {
      this.authService.getProfile().subscribe();
    }
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password).subscribe((rta) => {
        console.log(rta);
        this.token = rta.access_token;
        this.router.navigate(['admin']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
