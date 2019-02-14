import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
import { VictoryRateComponent } from './components/victoryrate/victoryrate.component';
import { MatchResultToFaiconPipe } from './pipes/match-result-to-faicon.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [VictoryRateComponent, MatchResultToFaiconPipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
    //  MatTableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    //   MatTableModule,
    VictoryRateComponent,
    MatchResultToFaiconPipe,
    HttpClientModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
