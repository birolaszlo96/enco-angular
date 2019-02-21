import { Component, OnInit, Inject } from '@angular/core';
import { TeamDetailsModel } from '../models/team-details.model';
import { TeamsApiClientService } from '../clients/teams-api-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { TeamFormModel } from 'src/app/core/components/team-form/team-form.model';
import { MatSnackBar } from '@angular/material';
@Component({
  templateUrl: './team-edit.page.component.html'
})
export class TeamEditPageComponent implements OnInit {
  team: TeamDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamsApiClient: TeamsApiClientService,
    private router: Router,
    private snackbar: MatSnackBar,
    @Inject(HTTP_INTERCEPTORS) validators
  ) {
    console.log(validators);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.teamsApiClient.getTeamDetails(id).subscribe(res => (this.team = res));
  }

  save(team: TeamFormModel): void {
    const convertedTeam: TeamDetailsModel = Object.assign({}, team);
    convertedTeam.id = this.team.id;
    this.teamsApiClient.updateTeam(convertedTeam).subscribe(() => {
      this.router.navigateByUrl('/teams');
      this.snackbar.open('Team updated', '', { duration: 3000 });
    });
  }

  cancel(): void {
    this.location.back();
  }
}
