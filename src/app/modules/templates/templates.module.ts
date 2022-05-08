import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../components/templates/forms/login-form/login-form.component';
import { HeaderComponent } from '../../components/templates/header/header.component';
import { FooterComponent } from '../../components/templates/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    LoginFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  exports: [
    LoginFormComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class TemplatesModule { }
