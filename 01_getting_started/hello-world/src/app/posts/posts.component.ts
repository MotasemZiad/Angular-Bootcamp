import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response as any
      })
  }

  createPost(title: HTMLInputElement) {
    let post: any = { title: title.value }
    title.value = ''

    this.service.createPost(post)
      .subscribe({
        next: (response) => {
          this.posts.push(response)
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe(response => {
      console.log(response);
    })
  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe(_ => {
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1)
    })
  }

  /*
    REST API Methods:
    1. GET
    2. POST
    3. PUT
    4. PATCH
    5. DELETE
    6. HEAD
    7. OPTIONS
    8. CONNECT
    9. TRACE
  */

}
