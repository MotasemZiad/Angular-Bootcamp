import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite = false;
  @Output() change = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite(){
    this.isFavorite = !this.isFavorite
    this.change.emit({ newValue: this.isFavorite });
  }

}


export interface FavoriteChangedEventArgs {
  newValue: boolean
}
