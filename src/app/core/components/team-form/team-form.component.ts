import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { NameValidator } from 'src/app/shared/validators/name.validator';
import { TeamFormModel } from './team-form.model';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnChanges, OnInit {
  @Input() team: TeamFormModel;
  @Output() save = new EventEmitter<TeamFormModel>();
  @Output() cancel = new EventEmitter<void>();

  startYear = 1850;
  yearNumbers = [];

  teamForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      // Validators.pattern('.*fc.*' || '.*FC.*')
      NameValidator
    ]),
    yearOfFoundation: new FormControl(),
    coach: new FormControl('', [NameValidator]),
    matches: new FormControl(),
    points: new FormControl(),
    victories: new FormControl(),
    lastMatchAgainst: new FormControl('', [NameValidator]),
    lastMatchScoredGoals: new FormControl(),
    lastMatchOpponentGoals: new FormControl()
  });

  constructor() {}

  public ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.yearNumbers = Array(currentYear - (this.startYear - 1))
      .fill(0)
      .map((x, i) => i + this.startYear);
    // this.teamForm.valueChanges.subscribe(form => {
    //   sessionStorage.setItem('form', JSON.stringify(form));
    // }); // ez a cucc elmentené a session storage-be minden módosításnál - van amikor hasznos, pl oldal újratöltésénél
  }

  ngOnChanges() {
    if (this.team) {
      this.teamForm.patchValue(this.team);
    }
  }
}
