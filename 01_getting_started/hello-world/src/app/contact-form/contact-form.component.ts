import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
  ];

  gender = [
    Gender.Male,
    Gender.Female
  ]
  constructor() { }

  ngOnInit(): void {
  }

  log(x: any){
    console.log(x);
  }

  onSubmit(f: any){
    console.log(f.value)
  }

}

export enum Gender {
  Male = 'Male',
  Female = "Female",
}
