import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
 import { VictoryRateComponent } from './components/victoryrate/victoryrate.component';
import { MatchResultToFaiconPipe } from './pipes/match-result-to-faicon.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VictoryRateComponent,
    MatchResultToFaiconPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  //  MatTableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
 //   MatTableModule,
    VictoryRateComponent,
    MatchResultToFaiconPipe
  ]
})
export class SharedModule { }
