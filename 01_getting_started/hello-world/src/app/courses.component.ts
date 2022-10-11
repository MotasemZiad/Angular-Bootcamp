import {Component} from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <div (click)="onDivClick()">
      <button class="btn btn-primary" [class.active]="isActive" (click)="onClick($event)"> Click Me!</button>
    </div>
    <br><br>
    <button style="color: white;" [style.backgroundColor]="isActive ? 'blue' : 'red'"> Press Me!</button>
  `,
})
export class CoursesComponent {
    isActive = false;

    onClick($event:any){
      $event.stopPropagation(); // To disable event bubbling..
      console.log("You click me!", $event);
    }

    onDivClick(){
      console.log("You click the div");

    }
}
