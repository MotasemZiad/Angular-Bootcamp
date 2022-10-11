import {Component} from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <input #email (keyup.enter)="onKeyUp(email.value)" />
  `,
})
export class CoursesComponent {

  onKeyUp(email: any){
      console.log(email);
  }
}
