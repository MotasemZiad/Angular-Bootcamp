import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[] = [];
  private URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
    httpClient.get(this.URL)
      .subscribe(response => {
        this.posts = response as any
      })
  }

  createPost(title: HTMLInputElement) {
    let post: any = { title: title.value }
    title.value = ''

    this.httpClient.post(this.URL, JSON.stringify(post)).subscribe({
      next: (response) => {
        this.posts.push(response)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
