import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatuComponent } from './watu.component';

const routes: Routes = [{ path: '', component: WatuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatuRoutingModule { }
