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
export class TeamFormComponent implements OnChanges {
  @Input() team: TeamFormModel;
  @Output() save = new EventEmitter<TeamFormModel>();
  @Output() cancel = new EventEmitter<void>();

  teamForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      // Validators.pattern('.*fc.*' || '.*FC.*')
      NameValidator
    ]),
    yearOfFoundation: new FormControl('', [
      Validators.minLength(4),
      Validators.maxLength(4)
    ]),
    coach: new FormControl(),
    matches: new FormControl(),
    points: new FormControl(),
    victories: new FormControl(),
    lastMatchAgainst: new FormControl(),
    lastMatchScoredGoals: new FormControl(),
    lastMatchOpponentGoals: new FormControl()
  });

  constructor() {}

  ngOnChanges() {
    if (this.team) {
      this.teamForm.patchValue(this.team);
    }
  }
}
