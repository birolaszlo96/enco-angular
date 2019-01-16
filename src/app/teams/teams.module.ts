import { NgModule } from '@angular/core';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListPageComponent } from './pages/team-list.page.component';
import { TeamsApiClientService } from './clients/teams-api-client.service';
import { SharedModule } from '../shared/shared.module';
import { TeamDetailsPageComponent } from './pages/team-details.page.component';

@NgModule({
  declarations: [
    TeamListPageComponent,
    TeamDetailsPageComponent
  ],
  imports: [
    SharedModule,
    TeamsRoutingModule
  ],
  providers: [TeamsApiClientService]
})
export class TeamsModule { }

