import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl<any, any>) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') != -1)
      return {
        cannotContainSpace: true
      }

    return null;
  }

  static shouldBeUnique(control:AbstractControl<any, any>) : ValidationErrors | null {
    setInterval(() => {
      console.log("DONE");
    }, 3000)

    setTimeout(() => {
      console.log("Ok");
    }, 2000)

    if (control.value === 'mosh')
      return {
        shouldBeUnique: true
      }

    return null
  }
}
