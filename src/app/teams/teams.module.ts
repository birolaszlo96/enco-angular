import { NgModule } from '@angular/core';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListPageComponent } from './pages/team-list.page.component';
import { TeamsApiClientService } from './clients/teams-api-client.service';
import { SharedModule } from '../shared/shared.module';
import { TeamDetailsPageComponent } from './pages/team-details.page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './clients/mock/fake-teams-api-client.service';

@NgModule({
  declarations: [TeamListPageComponent, TeamDetailsPageComponent],
  imports: [SharedModule, TeamsRoutingModule],
  providers: [
    TeamsApiClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ]
})
export class TeamsModule {}
