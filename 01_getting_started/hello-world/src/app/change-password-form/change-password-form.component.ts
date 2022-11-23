import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.validOldPassword),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  }, {
    validators: PasswordValidators.passwordsShouldMatch
  })

  public get oldPassword() {
    return this.form.get('oldPassword')
  }

  public get newPassword() {
    return this.form.get('newPassword')
  }

  public get confirmPassword() {
    return this.form.get('confirmPassword')
  }

}
