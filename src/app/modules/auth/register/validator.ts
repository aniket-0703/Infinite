import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailOrMobileValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.get('email')?.value;
    const mobileNumber = control.get('mobileNumber')?.value;

    if (!email && !mobileNumber) {
      return { emailOrMobile: true };
    }

    return null;
  };
}
