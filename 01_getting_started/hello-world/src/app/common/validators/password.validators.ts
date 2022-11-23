import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class PasswordValidators {
  static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '12341234')
          resolve({ invalidOldPassword: true })
        else
          resolve(null)
      }, 2000);
    })
  }

  static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword')
    const confirmPassword = control.get('confirmPassword')

    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value)
      return { mismatch: true }

    return null
  }
}
