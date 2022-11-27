import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  updatePost(post: any) {
    this.httpClient.patch(this.URL + '/' + post.id, JSON.stringify({
      isRead: true
    })).subscribe(response => {
      console.log(response);
    })

    // this.httpClient.put(this.URL, JSON.stringify(post))
  }

  deletePost(post: any) {
    this.httpClient.delete(this.URL + '/' + post.id).subscribe(response => {
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1)
    })
  }

}
