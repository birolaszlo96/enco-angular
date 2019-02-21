import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeamsApiClientService } from '../clients/teams-api-client.service';
import { TeamFormModel } from 'src/app/core/components/team-form/team-form.model';
import { TeamDetailsModel } from '../models/team-details.model';
import { MatSnackBar } from '@angular/material';

@Component({
  templateUrl: './team-edit.page.component.html'
})
export class TeamCreatePageComponent {
  team = {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private snackbar: MatSnackBar,
    private teamsApiClient: TeamsApiClientService
  ) {}

  save(team: TeamFormModel): void {
    const convertedTeam: TeamDetailsModel = Object.assign({}, team);
    this.teamsApiClient.createTeam(convertedTeam).subscribe(() => {
      this.router.navigateByUrl('/teams');
      this.snackbar.open('Team created', '', { duration: 3000 });
    });
  }

  cancel(): void {
    this.location.back();
  }
}
