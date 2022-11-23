import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([])
    })
  }

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
