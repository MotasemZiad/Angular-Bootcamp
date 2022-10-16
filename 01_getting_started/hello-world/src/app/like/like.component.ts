import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {
  @Input('numberOfLikes') numberOfLikes = 0
  @Input('isSelected') isSelected = false
  onClick(){
    this.numberOfLikes += this.isSelected ? -1: 1
    this.isSelected = ! this.isSelected
  }

}
