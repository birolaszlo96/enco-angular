import { Component, OnInit } from '@angular/core';
import { TeamsApiClientService } from '../clients/teams-api-client.service';
import { TeamListModel } from '../models/team-list.model';

@Component({
  templateUrl: './team-list.page.component.html'
})
export class TeamListPageComponent implements OnInit {
  teams: TeamListModel[];

  constructor(private teamsApiClient: TeamsApiClientService) { }

  ngOnInit() {
    this.teamsApiClient.getTeams().subscribe(res => this.teams = res);
  }

   getFaIconForMatchResult(matchResult: number) {
     console.log('getFaIconForMatchResult');
     switch (matchResult) {
       case 3: return 'victory :)';
       case 1: return 'draw :|';
       default: return 'defeat :(';
     }
   }
}
