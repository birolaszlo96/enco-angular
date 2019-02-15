import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  ContentChild
} from '@angular/core';
import { VictoryRateComponent } from 'src/app/shared/components/victoryrate/victoryrate.component';

@Component({
  selector: 'app-frame',
  templateUrl: 'frame.component.html'
})
export class FrameComponent {
  @ViewChild('cont') container: ElementRef;

  @ViewChildren(VictoryRateComponent) ps: QueryList<VictoryRateComponent>;
  @ViewChild(VictoryRateComponent) vcRating: VictoryRateComponent;

  @ContentChild(VictoryRateComponent) ccRating: VictoryRateComponent;

  clicked() {
    console.log('log viewchildren');
    this.ps.forEach(x => console.log(x));

    console.log('log viewchild rating');
    console.log(this.vcRating);

    console.log('log container');
    console.log(this.container);

    console.log('log contentchild rating');
    console.log(this.ccRating);
  }

  clicked2(el: ElementRef) {
    console.log(el);
  }
}
