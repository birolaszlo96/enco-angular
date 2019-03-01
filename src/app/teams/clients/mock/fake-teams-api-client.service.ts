import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { TeamListModel } from '../../models/team-list.model';
import { TeamDetailsModel } from '../../models/team-details.model';
import { MatchResult } from '../../models/match-result.model';
import 'rxjs/add/operator/do';

const Opponents: Array<string> = [
  'újpest fc',
  'MTK Budapest',
  'Nyíregyházi Spartacus',
  'Puskás Akadémia',
  'Vasas FC',
  'Budapest Honvéd',
  'Paks FC',
  'Debreceni VSC'
];

export const listMock: TeamListModel[] = [
  {
    id: 1,
    name: 'Ferencváros',
    yearOfFoundation: 1899,
    coach: 'Serhiy Rebrov',
    matches: 10,
    victories: 6,
    lastMatch: MatchResult.Draw
  },
  {
    id: 2,
    name: 'Mol Vidi FC',
    yearOfFoundation: 1931,
    coach: 'Marko Nikolic',
    matches: 9,
    victories: 9,
    lastMatch: MatchResult.Victory
  },
  {
    id: 3,
    name: 'Szombathelyi Haladás',
    yearOfFoundation: 1945,
    coach: 'Horváth Ferenc',
    matches: 10,
    victories: 0,
    lastMatch: MatchResult.Defeat
  },
  {
    id: 4,
    name: 'Budapest Honvéd',
    yearOfFoundation: 1899,
    coach: 'Marco Rossi',
    matches: 10,
    victories: 5,
    lastMatch: MatchResult.Draw
  },
  {
    id: 5,
    name: 'Mezőkövesd',
    yearOfFoundation: 1999,
    coach: 'Kuttor Attila',
    matches: 10,
    victories: 4,
    lastMatch: MatchResult.Defeat
  },
  {
    id: 6,
    name: 'DVTK',
    yearOfFoundation: 1899,
    coach: 'Fernando Fernández',
    matches: 10,
    victories: 3,
    lastMatch: MatchResult.Victory
  }
];
export let detailsMocks: TeamDetailsModel[] = listMock.map(
  (x: TeamListModel): TeamDetailsModel => ({
    ...x,
    points:
      x.victories * 3 + Math.floor(Math.random() * (x.matches - x.victories)),
    lastMatchAgainst: Opponents[Math.floor(Math.random() * Opponents.length)],
    lastMatchScoredGoals:
      x.lastMatch === MatchResult.Defeat
        ? 0
        : x.lastMatch === MatchResult.Draw
        ? 1
        : 2,
    lastMatchOpponentGoals: 1
  })
);

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return (
      of(null)
        .pipe(
          mergeMap(() => {
            // console.log(request.url);
            if (
              request.url.match(/\/teams\/\d+$/) &&
              request.method === 'GET'
            ) {
              console.log('getgetget');
              const urlParts = request.url.split('/');
              const id = parseInt(urlParts[urlParts.length - 1], 10);
              const team = detailsMocks.find(x => x.id === id);
              if (team) {
                return of(
                  new HttpResponse({
                    status: 200,
                    body: team
                  })
                );
              } else {
                return throwError({ error: { message: 'Not found :(' } });
              }
            }
            if (
              request.url.match(/\/teams\/\d+$/) &&
              request.method === 'PUT'
            ) {
              console.log('putputput');
              const team = request.body;
              const teamDetailsToUpdate = detailsMocks.find(
                x => x.id === team.id
              );
              const index = detailsMocks.indexOf(teamDetailsToUpdate);
              detailsMocks[index] = team;
              const lastmatch =
                team.lastMatchScoredGoals < team.lastMatchOpponentGoals
                  ? MatchResult.Defeat
                  : team.lastMatchScoredGoals === team.lastMatchOpponentGoals
                  ? MatchResult.Draw
                  : MatchResult.Victory;
              const teamList: TeamListModel = {
                ...team,
                lastMatch: lastmatch
              };
              console.log(teamList);
              const teamListToUpdate = listMock.find(x => x.id === team.id);
              const listIndex = listMock.indexOf(teamListToUpdate);
              listMock[listIndex] = teamList;
              if (team) {
                return of(
                  new HttpResponse({
                    status: 200,
                    body: team
                  })
                );
              } else {
                return throwError({ error: { message: 'Not found :(' } });
              }
            }
            if (
              request.url.match(/\/teams\/create/) &&
              request.method === 'POST'
            ) {
              console.log('postpostpost');
              const team = request.body;
              const newId = detailsMocks[detailsMocks.length - 1].id + 1;
              if (detailsMocks.find(x => x.id === newId)) {
                return throwError({
                  error: { message: 'There is a BIIIIG problem with IDs :(' }
                });
              }
              team.id = newId;
              detailsMocks.push(team);
              const lastmatch =
                team.lastMatchScoredGoals < team.lastMatchOpponentGoals
                  ? MatchResult.Defeat
                  : team.lastMatchScoredGoals === team.lastMatchOpponentGoals
                  ? MatchResult.Draw
                  : MatchResult.Victory;
              const teamList: TeamListModel = {
                ...team,
                lastMatch: lastmatch
              };
              listMock.push(teamList);
              if (team) {
                return of(
                  new HttpResponse({
                    status: 200,
                    body: team
                  })
                );
              } else {
                return throwError({ error: { message: 'Not found :(' } });
              }
            }
            if (
              request.url.match(/\/teams\/\d+$/) &&
              request.method === 'DELETE'
            ) {
              console.log('deletedeletedelete');
              const urlParts = request.url.split('/');
              const id = parseInt(urlParts[urlParts.length - 1], 10);
              const index = detailsMocks.findIndex(x => x.id === id);
              const index2 = listMock.findIndex(x => x.id === id);
              if (index !== -1 && index2 !== -1) {
                detailsMocks.splice(index, 1);
                listMock.splice(index2, 1);
                return of(
                  new HttpResponse({
                    status: 200,
                    body: 'delete successful'
                  })
                );
              } else {
                return throwError({ error: { message: 'Not found :(' } });
              }
            }
            console.log('egyikbe se futott bele');
            // pass through any requests not handled above
            return next.handle(request);
          })
        )
        // call materialize and dematerialize to ensure delay
        // even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())
    );
  }
}

@Injectable()
export class Fak2 implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).do(evt => {
      if (evt instanceof HttpResponse) {
        console.log('---> status:', evt.status);
        console.log('---> filter:', req.params.get('filter'));
        console.log(listMock);
      }
    });
  }
}
