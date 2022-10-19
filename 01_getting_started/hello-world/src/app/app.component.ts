import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses = [
      {'id': 1, 'name': 'Programming'},
      {'id': 2, 'name': 'Cloud Computing'},
      {'id': 3, 'name': 'Networking'},
      {'id': 4, 'name': 'Operating Systems'},
      {'id': 5, 'name': 'Database Administration'},
    ]

    onAddSomething(course: Course){
      this.courses.push(course)
    }

    onAdd(){
      this.courses.push({'id': 6, 'name': 'Distributed Systems'})
    }

    onRemove(course: Course){
      let index = this.courses.indexOf(course)
      this.courses.splice(index, 1)
    }

    onChange(course: Course){
      course.name = 'UPDATED'
    }
}

interface Course {
  id: number
  name: string
}
