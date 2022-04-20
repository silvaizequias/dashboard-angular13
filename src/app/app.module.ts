import { DashboardModule, dashboardRoutes } from './modules/dashboard/dashboard.module';
import { AccessModule, accessRoutes } from './modules/access/access.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'dashboard',
          children: dashboardRoutes,
          canActivate: [AuthGuard],
        },
        { path: '', children: accessRoutes },
        { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
      ],
      { initialNavigation: 'enabled' }
    ),
    AccessModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
