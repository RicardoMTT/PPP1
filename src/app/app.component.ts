import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  sidenavAdmin: any[];
  valor = true;

  constructor() {
    this.sidenavAdmin = [
      {
        label: 'Agencias',
        routerLink: '/',
        clase: 'nav-icon fas fa-th',
      },
      {
        label: 'Usuario',
        routerLink: '/result',
        clase: 'nav-icon fas fa-table',
      },
    ];
  }

  returnClass(clase) {
    return clase;
  }
}
