import { Component, OnInit } from '@angular/core';
import { TeamsApiClientService } from '../clients/teams-api-client.service';
import { ActivatedRoute } from '@angular/router';
import { TeamDetailsModel } from '../models/team-details.model';
import { fadeInAnimation } from 'src/app/utils/fade-in-animation';

@Component({
  templateUrl: './team-details.page.component.html',
  animations: [fadeInAnimation]
})
export class TeamDetailsPageComponent implements OnInit {
  inputStr: string;
  team: TeamDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private teamsApiClient: TeamsApiClientService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.teamsApiClient.getTeamDetails(id).subscribe(res => (this.team = res));
  }

  ratingClicked(rating: number): void {
    console.log(rating);
  }
}
