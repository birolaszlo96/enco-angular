import { NgModule } from '@angular/core';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListPageComponent } from './pages/team-list.page.component';
import { TeamsApiClientService } from './clients/teams-api-client.service';
import { SharedModule } from '../shared/shared.module';
import { TeamDetailsPageComponent } from './pages/team-details.page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  FakeBackendInterceptor,
  Fak2
} from './clients/mock/fake-teams-api-client.service';
import { TeamCreatePageComponent } from './pages/team-create.page.component';
import { TeamEditPageComponent } from './pages/team-edit.page.component';
import { TeamFormComponent } from '../core/components/team-form/team-form.component';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    TeamListPageComponent,
    TeamDetailsPageComponent,
    TeamCreatePageComponent,
    TeamEditPageComponent,
    TeamFormComponent
  ],
  imports: [SharedModule, TeamsRoutingModule, MatSnackBarModule],
  providers: [
    TeamsApiClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Fak2,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ]
})
export class TeamsModule {}
