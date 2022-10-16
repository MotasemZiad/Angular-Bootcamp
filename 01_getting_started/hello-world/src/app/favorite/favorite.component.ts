import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isFavorite') isFavorite = false;
  @Output('change') change = new EventEmitter;

  toggleFavorite(){
    this.isFavorite = !this.isFavorite
    this.change.emit({ newValue: this.isFavorite });
  }

}


export interface FavoriteChangedEventArgs {
  newValue: boolean
}
