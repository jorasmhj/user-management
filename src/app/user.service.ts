import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get(`http://192.168.1.244:4100/app/users/list`);
  }

  createUser(userObj){
    return this.http.post(`http://192.168.1.244:4100/app/users/create`, userObj)
  }

}
