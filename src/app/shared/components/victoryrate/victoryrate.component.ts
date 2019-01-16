import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-victoryrate',
  templateUrl: './victoryrate.component.html',
  styleUrls: ['./victoryrate.component.scss']
})
export class VictoryRateComponent implements OnChanges {
  @Input() victoryRate = 0;
  @Output() clicked = new EventEmitter<number>();

  starWidth = 0;
  victoryRateString = '';

  ngOnChanges(): void {
    this.starWidth = this.victoryRate * 150;
    this.victoryRateString = Math.floor(this.victoryRate * 100) + ' %';

  }

  onClick(victoryRate: number): void {
    this.clicked.emit(victoryRate);
  }
}
