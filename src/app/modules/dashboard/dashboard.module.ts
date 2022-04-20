import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from 'src/app/libraries/material-design/material-design.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from '../../components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

export const dashboardRoutes: Route[] = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent, NavComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MaterialDesignModule,
    FlexLayoutModule,
    LayoutModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
