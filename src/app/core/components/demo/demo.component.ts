import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {
  @Input() model: any;

  constructor(private cd: ChangeDetectorRef) {}

  update(): void {
    // console.log(this.model);
    this.cd.markForCheck();
  }
}
