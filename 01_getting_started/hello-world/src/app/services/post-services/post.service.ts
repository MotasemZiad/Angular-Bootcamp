import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com/';
  private posts = 'posts/'

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.BASE_URL + this.posts)
  }

  createPost(post: any) {
    return this.http.post(this.BASE_URL + this.posts, JSON.stringify(post))
  }

  updatePost(post: any) {
    return this.http.patch(this.BASE_URL + this.posts + '/' + post.id, JSON.stringify({
      isRead: true
    }))

    // this.http.put(this.URL, JSON.stringify(post))
  }

  deletePost(id: any) {
    return this.http.delete(this.BASE_URL + this.posts + '/' + id)
  }
}
