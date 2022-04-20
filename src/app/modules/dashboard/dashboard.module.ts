import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from 'src/app/libraries/material-design/material-design.module';

export const dashboardRoutes: Route[] = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialDesignModule,
    FlexLayoutModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
