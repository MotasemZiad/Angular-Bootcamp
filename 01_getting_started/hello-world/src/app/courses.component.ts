import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan">Something really useful</td>
      </tr>
    </table>
  `,
})
export class CoursesComponent {
  title = "List of Courses"
  courses: string[]
  imageUrl = "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
  colSpan = 2;

  constructor(service: CoursesService){
      this.courses = service.getCourses()
  }
}
