import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatuRoutingModule } from './watu-routing.module';
import { WatuComponent } from './watu.component';


@NgModule({
  declarations: [WatuComponent],
  imports: [
    CommonModule,
    WatuRoutingModule
  ]
})
export class WatuModule { }
