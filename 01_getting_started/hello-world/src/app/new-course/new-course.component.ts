import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  categories = [
    {id: 1, name: "Development"},
    {id: 2, name: "Art"},
    {id: 2, name: "Languages"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: any){
    console.log(f.value)
  }

}
