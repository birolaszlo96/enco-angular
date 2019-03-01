import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { VictoryRateComponent } from './components/victoryrate/victoryrate.component';
import { MatchResultToFaiconPipe } from './pipes/match-result-to-faicon.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material';
import { ColorChangerDirective } from './directives/colorchanger.directive';

@NgModule({
  declarations: [
    VictoryRateComponent,
    MatchResultToFaiconPipe,
    ColorChangerDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    VictoryRateComponent,
    MatchResultToFaiconPipe,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    ColorChangerDirective
  ]
})
export class SharedModule {}
