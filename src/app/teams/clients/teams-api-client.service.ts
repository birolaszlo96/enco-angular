import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamListModel } from '../models/team-list.model';
import { TeamDetailsModel } from '../models/team-details.model';

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

const listMock: TeamListModel[] = [
  { id: 1, name: 'Ferencváros', yearOfFoundation: 1899, coach: 'Serhiy Rebrov', matches: 10, victories: 6, lastMatch: 1 },
  { id: 2, name: 'Mol Vidi FC', yearOfFoundation: 1931, coach: 'Marko Nikolic', matches: 9, victories: 9, lastMatch: 3 },
  { id: 3, name: 'Szombathelyi Haladás', yearOfFoundation: 1945, coach: 'Horváth Ferenc', matches: 10, victories: 0, lastMatch: 0 }
];
const detailsMocks: TeamDetailsModel[] =
  listMock.map((x: TeamListModel): TeamDetailsModel => ({
    ...x,
    points: x.victories * 3 + Math.floor(Math.random() * (x.matches - x.victories)),
    lastMatchAgainst: Opponents[Math.floor(Math.random() * Opponents.length)],
    lastMatchScoredGoals: (x.lastMatch === 0) ? 0 : (x.lastMatch === 1) ? 1 : 2,
    lastMatchOpponentGoals: 1
  }));

@Injectable()
export class TeamsApiClientService {

  constructor() { console.log('TeamsApiClientService created!'); }

  getTeams(): Observable<TeamListModel[]> {
    return of(listMock);
  }

  getTeamDetails(id: number): Observable<TeamDetailsModel> {
    return of(detailsMocks.find(x => x.id === id));
  }
}
