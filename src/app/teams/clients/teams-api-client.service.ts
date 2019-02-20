import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { TeamListModel } from '../models/team-list.model';
import { TeamDetailsModel } from '../models/team-details.model';
import { listMock, detailsMocks } from './mock/fake-teams-api-client.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { TeamFilterModel } from '../models/team-filter.model';
import { delay, catchError } from 'rxjs/operators';

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

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class TeamsApiClientService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getTeams(filter: TeamFilterModel): Observable<TeamListModel[]> {
    const obs = filter ? of(listMock.filter(teamfilter(filter))) : of(listMock);
    return obs.pipe(delay(500));
  }

  getTeamDetails(id: number): Observable<TeamDetailsModel> {
    return this.http.get<TeamDetailsModel>(`/teams/${id}`);
  }

  updateTeam(team: TeamDetailsModel): Observable<TeamDetailsModel> {
    console.log(team.id);
    return this.http.get<TeamDetailsModel>(`/teams/${team.id}`);
  }
}
