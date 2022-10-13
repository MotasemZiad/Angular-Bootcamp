import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  imageUrl = "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
  constructor() { }

  onClick(){
    alert("Do you love Angular?")
  }
  ngOnInit(): void {
  }

}
