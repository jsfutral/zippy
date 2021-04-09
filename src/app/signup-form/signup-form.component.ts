import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      oldPassword: new FormControl('', 
        Validators.required, 
        UsernameValidators.shouldBeUnique),
      passwords: new FormGroup({
          newPassword: new FormControl('', Validators.required),
          confirmPassword: new FormControl('', Validators.required)
        },
        UsernameValidators.matchingError
      )
    })
  });

  login() {
    //this.form.setErrors({
    //  invalidLogin: true
    //});
  }

  get oldPassword() {
    return this.form.get('account.oldPassword');
  }

  get newPassword() {
    return this.form.get('account.passwords.newPassword');
  }

  get confirmPassword() {
    return this.form.get('account.passwords.confirmPassword');
  }

  get passwords() {
    return this.form.get('account.passwords');
  }
}
