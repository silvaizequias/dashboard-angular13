import { BrandInterface } from './../../interfaces/brand-interface';
import { MenuInterface } from './../../interfaces/menu-interface';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  brandName: BrandInterface = {
    name: 'Sistema Dedicado',
  }

  topMenu: MenuInterface[] = [
    {
      label: 'Link 1',
      icon: '',
      link: '',
    },
    {
      label: 'Link 2',
      icon: '',
      link: '',
    },
  ];

  sideMenu: MenuInterface[] = [
    {
      label: '',
      icon: '',
      link: '',
    },
    {
      label: 'Suporte',
      icon: 'help_center',
      link: '#',
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
