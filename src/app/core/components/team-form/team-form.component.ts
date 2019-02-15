import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { TeamFormModel } from './team-form.model';
import { NameValidator } from 'src/app/shared/validators/name.validator';

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
    name: new FormControl('', [Validators.required, NameValidator]),
    foundation: new FormControl('', [Validators.required]),
    coach: new FormControl(),
    matches: new FormControl(),
    victories: new FormControl(),
    lastMatch: new FormControl()
  });

  constructor() {}

  ngOnChanges() {
    if (this.team) {
      this.teamForm.patchValue(this.team);
    }
  }
}
