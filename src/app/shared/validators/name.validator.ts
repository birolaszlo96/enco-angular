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
  if (!/[a-zA-Z]/.test(control.value) && control.value !== '') {
    return {
      name: {
        valid: false,
        message: 'A name shouldn\'t be a number.'
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
