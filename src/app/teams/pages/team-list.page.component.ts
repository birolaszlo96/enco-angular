import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { TeamsApiClientService } from '../clients/teams-api-client.service';
import { TeamListModel } from '../models/team-list.model';
import { TeamFilterModel } from '../models/team-filter.model';
import { Subject, fromEvent, Observable } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  takeUntil
} from 'rxjs/operators';
import { MatchResult } from '../models/match-result.model';

@Component({
  templateUrl: './team-list.page.component.html'
})
export class TeamListPageComponent implements OnInit, OnDestroy, AfterViewInit {
  debouncer$ = new Subject<string>();
  destroy$ = new Subject();
  filter: TeamFilterModel = {};
  error: string | null = null;
  teams: TeamListModel[];
  isLoading = true;

  @ViewChildren('filterField') filterFields: QueryList<ElementRef>;

  constructor(private teamsApiClient: TeamsApiClientService) {}

  ngAfterViewInit(): void {
    const fields = this.filterFields.map(f => f.nativeElement);

    fromEvent(fields, 'input')
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => console.log('simple'));

    // // cold
    const obs = new Observable<number>(observer => {
      observer.next(Math.random());
      return () => {};
    });

    // // hot
    // const random = Math.random();
    // const obs = new Observable<number>((observer) => {
    //   observer.next(random);
    //   return () => { };
    // });

    obs.subscribe(val => console.log('from subscription1: ', val));
    obs.subscribe(val => console.log('from subscription2: ', val));
  }

  ngOnInit() {
    this.loadTeams();
    this.debouncer$
      .pipe(
        filter((x: string) => (x && x.length > 1) || !x),
        debounceTime(500),
        distinctUntilChanged((x, y) => x === y),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.loadTeams());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  loadTeams() {
    this.isLoading = true;
    this.teamsApiClient.getTeams(this.filter).subscribe(
      res => {
        this.teams = res;
      },
      error => {
        this.teams = error;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  getFaIconForMatchResult(matchResult: MatchResult) {
    console.log('getFaIconForMatchResult');
    switch (matchResult) {
      case MatchResult.Victory:
        return 'victory :)';
      case MatchResult.Draw:
        return 'draw :|';
      default:
        return 'defeat :(';
    }
  }
}
