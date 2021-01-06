import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatuComponent } from './watu.component';

const routes: Routes = [
  {
    path: '',
    component: WatuComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/watu/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatuRoutingModule {}
