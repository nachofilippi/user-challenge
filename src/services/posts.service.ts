import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  public getAllPosts(): Observable<Post[]> {
    return from(
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => json)
    );
  }

  public getPostById(id: string): Observable<Post> {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    return from(
      fetch(url)
        .then((response) => response.json())
        .then((json) => json)
    );
  }
}
