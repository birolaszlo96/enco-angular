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
    lastMatch: 1
  },
  {
    id: 2,
    name: 'Mol Vidi FC',
    yearOfFoundation: 1931,
    coach: 'Marko Nikolic',
    matches: 9,
    victories: 9,
    lastMatch: 3
  },
  {
    id: 3,
    name: 'Szombathelyi Haladás',
    yearOfFoundation: 1945,
    coach: 'Horváth Ferenc',
    matches: 10,
    victories: 0,
    lastMatch: 0
  },
  {
    id: 4,
    name: 'Budapest Honvéd',
    yearOfFoundation: 1899,
    coach: 'Marco Rossi',
    matches: 10,
    victories: 5,
    lastMatch: 1
  },
  {
    id: 5,
    name: 'Mezőkövesd',
    yearOfFoundation: 1999,
    coach: 'Kuttor Attila',
    matches: 10,
    victories: 4,
    lastMatch: 0
  },
  {
    id: 6,
    name: 'DVTK',
    yearOfFoundation: 1899,
    coach: 'Fernando Fernández',
    matches: 10,
    victories: 3,
    lastMatch: 3
  }
];
export const detailsMocks: TeamDetailsModel[] = listMock.map(
  (x: TeamListModel): TeamDetailsModel => ({
    ...x,
    points:
      x.victories * 3 + Math.floor(Math.random() * (x.matches - x.victories)),
    lastMatchAgainst: Opponents[Math.floor(Math.random() * Opponents.length)],
    lastMatchScoredGoals: x.lastMatch === 0 ? 0 : x.lastMatch === 1 ? 1 : 2,
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
            console.log('asd');
            if (
              request.url.match(/\/teams\/\d+$/) &&
              request.method === 'GET'
            ) {
              console.log('ads');
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
