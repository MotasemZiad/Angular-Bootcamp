import {Component} from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <br><br>
    {{ "Title: " + (course.title | uppercase | lowercase) }} <br/>
    {{ "Students: " + (course.students | number) }} <br/>
    {{ "Rating: " + (course.rating | number: '1.1-2') }} <br/>
    {{ "Price: " + (course.price | currency: 'GBP') }} <br/>
    {{ "Release Date: " + (course.releaseDate | date: 'shortDate')  }} <br/>
  `,
})
export class CoursesComponent {
  email = "me@example.com";
  onKeyUp(){
      console.log(this.email);
  }

  course = {
    title: "The Complete Angular Course",
    rating: 4.9752,
    students: 90232,
    price: 180.99,
    releaseDate: new Date(2022, 7, 18)
  }
}
