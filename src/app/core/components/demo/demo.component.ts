import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {

  @Input() model: any;

  constructor(private cd: ChangeDetectorRef) { }

  update(): void {
    // console.log(this.model);
    this.cd.markForCheck();
  }

}
