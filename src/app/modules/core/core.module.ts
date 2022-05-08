import { NgModule } from '@angular/core';
import { CoreComponent } from '../../components/core/core.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PagesModule, pagesRoutes } from '../pages/pages.module';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', children: pagesRoutes },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ], { initialNavigation: 'enabled' }),
    PagesModule,
    TemplatesModule
  ],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
