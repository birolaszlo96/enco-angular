import { Directive } from '@angular/core';
import {
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';

export function NameValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (parseInt(control.value, 10)) {
    return {
      name: {
        valid: false,
        message: 'Name shouldn\'t be a number.'
      }
    };
  }
  return null;
}

@Directive({
  selector: '[appNameValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true }
  ]
})
export class NameValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return NameValidator(control);
  }
}
