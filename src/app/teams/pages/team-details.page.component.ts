import { Component, OnInit } from '@angular/core';
import { TeamsApiClientService } from '../clients/teams-api-client.service';
import { ActivatedRoute } from '@angular/router';
import { TeamDetailsModel } from '../models/team-details.model';
import { fadeInAnimation } from 'src/app/utils/fade-in-animation';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  templateUrl: './team-details.page.component.html',
  animations: [fadeInAnimation]
})
export class TeamDetailsPageComponent implements OnInit {
  inputStr: string;
  team: TeamDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private location: Location,
    private teamsApiClient: TeamsApiClientService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.teamsApiClient.getTeamDetails(id).subscribe(res => (this.team = res));
  }

  delete() {
    if (confirm('Are you sure to delete ' + this.team.name + '???')) {
      this.teamsApiClient.deleteTeam(this.team).subscribe(() => {
        this.location.back();
        this.snackbar.open('Team deleted:', this.team.name, { duration: 3000 });
      });
    }
  }

  ratingClicked(rating: number): void {
    console.log(rating);
  }
}
