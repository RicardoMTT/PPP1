import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatuRoutingModule } from './watu-routing.module';
import { WatuComponent } from './watu.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@NgModule({
  declarations: [WatuComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, WatuRoutingModule],
})
export class WatuModule {}
