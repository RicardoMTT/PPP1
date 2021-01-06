import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  sidenavAdmin: any[];

  constructor() {
    this.sidenavAdmin = [
      {
        label: 'Agencias',
        routerLink: '/admin/',
        clase: 'nav-icon fas fa-building',
      },
      {
        label: 'Usuario',
        routerLink: '/admin/result',
        clase: 'nav-icon fas fa-user',
      },
    ];
  }
  returnClass(clase) {
    return clase;
  }

  ngOnInit(): void {}
}
