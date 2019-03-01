import { Pipe, PipeTransform } from '@angular/core';
import { MatchResult } from 'src/app/teams/models/match-result.model';

@Pipe({
  name: 'matchResultToFaicon'
})
export class MatchResultToFaiconPipe implements PipeTransform {
  transform(value: MatchResult): string {
    console.log('MatchResultToFaiconPipe');
    switch (value) {
      case MatchResult.Victory:
        return 'fa fa-smile-o';
      case MatchResult.Draw:
        return 'fa fa-meh-o';
      case MatchResult.Defeat:
        return 'fa fa-frown-o';
    }
  }
}
