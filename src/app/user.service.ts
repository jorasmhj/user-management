import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { User } from './content/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn : boolean = false;

  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get(`https://reqres.in/api/users/2`);
  }

  createUser(userObj){
    return this.http.post(`https://reqres.in/api/register`, userObj)
  }

  login(user){
    return this.http.post(`https://reqres.in/api/login`, user);
  }

}
