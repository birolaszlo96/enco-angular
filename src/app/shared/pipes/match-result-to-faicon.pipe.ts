import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchResultToFaicon'
})
export class MatchResultToFaiconPipe implements PipeTransform {

  transform(value: number): string {
    console.log('MatchResultToFaiconPipe');
     switch (value) {
       case 3: return 'fa fa-smile-o';
       case 1: return 'fa fa-meh-o';
       default: return 'fa fa-frown-o';
    }
  }
}
