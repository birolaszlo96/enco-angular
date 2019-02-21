import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamsApiClientService } from '../clients/teams-api-client.service';
import { TeamFormModel } from 'src/app/core/components/team-form/team-form.model';

@Component({
  templateUrl: './team-edit.page.component.html'
})
export class TeamCreatePageComponent {
  team = {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamsApiClient: TeamsApiClientService
  ) {}

  save(team: TeamFormModel): void {
    console.log(team);
  }

  cancel(): void {
    console.log('navigating back');
    this.location.back();
  }
}
