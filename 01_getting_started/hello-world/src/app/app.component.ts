import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    viewMode = 'map'

    courses = [
      {'id': 1, 'name': 'Programming'},
      {'id': 2, 'name': 'Cloud Computing'},
      {'id': 3, 'name': 'Networking'},
      {'id': 4, 'name': 'Linux'},
      {'id': 5, 'name': 'Database Administration'},
    ]
}
