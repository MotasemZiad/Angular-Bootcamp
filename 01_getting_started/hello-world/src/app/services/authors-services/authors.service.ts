import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor() { }

  getAuthors(){
    return ["Author 1", "Author 2", "Author 3", "Author 4", "Author 5"];
  }
}
