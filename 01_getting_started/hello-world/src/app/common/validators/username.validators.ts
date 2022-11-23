import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl<any, any>): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') != -1)
      return {
        cannotContainSpace: true
      }

    return null;
  }

  static shouldBeUnique(control: AbstractControl<any, any>): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh')
          resolve({ shouldBeUnique: true })
        else
          resolve(null)
      }, 2000)
    })
  }
}
