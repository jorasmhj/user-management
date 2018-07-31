import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn : boolean = false;

  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get(`http://192.168.1.244:4100/app/users/list`);
    //return this.http.get(`http://192.168.1.244:4100/app/users/list`);
    return this.http.get(`https://reqres.in/api/users/2`);
  }

  createUser(userObj){
    return this.http.post(`http://192.168.1.244:4100/app/users/create`, userObj)
  }
>>>>>>> 985ed59fb43d2b1a5a9b09f82e91f8a1907d3590

  login(){
    return this.http.get(`https://reqres.in/api/users/2`);
  }

}
