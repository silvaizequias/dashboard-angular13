import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { MaterialDesignService } from '../../../libraries/material-design/material-design.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  formLogin: FormGroup;
  captchaKey = '6Lf_QZYeAAAAAIEL6r1G_saWqPAp4rrtXnFM64a2';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly materialDesignService: MaterialDesignService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(18),
        ],
      ],
      recaptcha: ['', Validators.required],
    });
  }

  userLogin(): void {
    const data = this.formLogin.value;
    if (!data) {
      console.log('Erro de Validação');
      this.formLogin.reset();
      this.router.navigate(['/']);
      this.materialDesignService.showMessage('Ops, algo deu errado!');
    }
    //this.authService.SignIn(data);
    console.log(data);
    this.formLogin.reset();
    this.router.navigate(['/dashboard']);
    this.materialDesignService.showMessage('Seja Bem Vindo(a)');
  }
}
