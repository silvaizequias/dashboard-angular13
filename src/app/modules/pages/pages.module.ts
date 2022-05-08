import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '../../components/pages/login-page/login-page.component';
import { MainPageComponent } from '../../components/pages/main-page/main-page.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from 'src/app/auth/auth.interceptor';
import { TemplatesModule } from '../templates/templates.module';
import { ErrorPageComponent } from '../../components/pages/error-page/error-page.component';

export const pagesRoutes: Route[] = [
  { path: '', component: MainPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    LoginPageComponent,
    MainPageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    TemplatesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})
export class PagesModule { }
