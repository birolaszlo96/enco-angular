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
import { delay, catchError, tap } from 'rxjs/operators';

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTeams(filter: TeamFilterModel): Observable<TeamListModel[]> {
    const obs = filter ? of(listMock.filter(teamfilter(filter))) : of(listMock);
    return obs.pipe(delay(500));
  }

  getTeamDetails(id: number): Observable<TeamDetailsModel> {
    return this.http.get<TeamDetailsModel>(`/teams/${id}`);
  }

  updateTeam(team: TeamDetailsModel): Observable<TeamDetailsModel> {
    return this.http
      .put<TeamDetailsModel>(`/teams/${team.id}`, team, httpOptions)
      .pipe(
        tap(_ => console.log(`updated team id=${team.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }
}
