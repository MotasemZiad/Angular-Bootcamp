import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    name: new FormControl(),
    contacts: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([

    ])
  })

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = ''
  }

  removeTopic(topic: AbstractControl<any, any>) {
    let index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index)
  }


  public get topics() {
    return (this.form.get('topics') as FormArray)
  }


}
