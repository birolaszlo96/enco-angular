import { Component, OnInit, Inject } from '@angular/core';
import { TeamDetailsModel } from '../models/team-details.model';
import { TeamsApiClientService } from '../clients/teams-api-client.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { TeamFormModel } from 'src/app/core/components/team-form/team-form.model';

@Component({
  templateUrl: './team-edit.page.component.html'
})
export class TeamEditPageComponent implements OnInit {
  team: TeamDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamsApiClient: TeamsApiClientService,
    @Inject(HTTP_INTERCEPTORS) validators
  ) {
    console.log(validators);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.teamsApiClient.getTeamDetails(id).subscribe(res => (this.team = res));
  }

  save(team: TeamFormModel): void {
    console.log(team);
    this.teamsApiClient.updateTeam(this.team);
  }

  cancel(): void {
    this.location.back();
  }
}
