import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  sidenavAdmin: any[];

  constructor() {
    this.sidenavAdmin = [
      {
        label: 'Inicio',
        routerLink: '/',
      },
      {
        label: 'Resultados',
        routerLink: '/result',
      },
    ];
  }
}
