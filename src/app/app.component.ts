import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  sidenavAdmin: any[];
  valor = true;
  currentPath: string;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.urlAfterRedirects;
      }
    });
    this.sidenavAdmin = [
      {
        label: 'Agencias',
        routerLink: '/',
        clase: 'nav-icon fas fa-building',
      },
      {
        label: 'Usuario',
        routerLink: '/result',
        clase: 'nav-icon fas fa-user',
      },
    ];
  }

  returnClass(clase) {
    return clase;
  }
}
