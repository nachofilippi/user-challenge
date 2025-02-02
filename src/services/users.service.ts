import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  public getAllUsers(): Observable<User[]> {
    return from(
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => json)
    );
  }

  public getUserById(id: string): Observable<User> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    return from(
      fetch(url)
        .then((response) => response.json())
        .then((json) => json)
    );
  }
}
