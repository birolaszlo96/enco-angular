import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamListModel } from '../models/team-list.model';
import { TeamDetailsModel } from '../models/team-details.model';
import { listMock, detailsMocks } from './mock/fake-teams-api-client.service';
import { HttpClient } from '@angular/common/http';
import { TeamFilterModel } from '../models/team-filter.model';
import { delay } from 'rxjs/operators';

const teamfilter = (filter: TeamFilterModel) => {
  return (x: TeamListModel): boolean => {
    return (
      ((filter.name &&
        x.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1) ||
        !filter.name) &&
      ((filter.coach &&
        x.coach.toLowerCase().indexOf(filter.coach.toLowerCase()) !== -1) ||
        !filter.coach)
    );
  };
};

@Injectable()
export class TeamsApiClientService {
  constructor(private http: HttpClient) {}

  getTeams(filter: TeamFilterModel): Observable<TeamListModel[]> {
    const obs = filter ? of(listMock.filter(teamfilter(filter))) : of(listMock);
    return obs.pipe(delay(500));
  }

  getTeamDetails(id: number): Observable<TeamDetailsModel> {
    return this.http.get<TeamDetailsModel>(`/teams/${id}`);
  }
}
