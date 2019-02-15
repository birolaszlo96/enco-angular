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

  @ContentChild(VictoryRateComponent) ccString: VictoryRateComponent;

  clicked() {
    // console.log('log container');
    // console.log(this.container);

    console.log('log contentchild rating');
    console.log(this.ccString);
    alert('wrong answer!!!!4!!!!');
  }

  clicked2(el: ElementRef) {
    console.log('No.');
    console.log(el);
    alert('View logs!');
  }
  clicked3() {
    // console.log('log viewchildren');
    // this.ps.forEach(x => console.log(x));
    alert('Congrats, you are fenomenal like Torghelle!');
    console.log('log viewchild rating');
    console.log(this.vcRating);
  }
}
