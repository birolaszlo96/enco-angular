import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home.page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
