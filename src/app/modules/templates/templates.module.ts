import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../components/templates/forms/login-form/login-form.component';
import { HeaderComponent } from '../../components/templates/header/header.component';
import { FooterComponent } from '../../components/templates/footer/footer.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginFormComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class TemplatesModule { }
