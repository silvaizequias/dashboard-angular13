import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from '../../components/access/access.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MaterialDesignModule } from 'src/app/libraries/material-design/material-design.module';
import { LoginFormComponent } from 'src/app/components/forms/login-form/login-form.component';

export const accessRoutes: Route[] = [{ path: '', component: AccessComponent }];

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [AccessComponent, LoginFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialDesignModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  exports: [LoginFormComponent],
})
export class AccessModule {}
