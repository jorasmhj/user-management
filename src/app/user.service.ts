import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn : boolean = false;

  constructor(private http : HttpClient) { }

  getUser(){
<<<<<<< HEAD
    return this.http.get(`http://192.168.1.244:4100/app/users/list`);
    //return this.http.get(`http://192.168.1.244:4100/app/users/list`);
    return this.http.get(`https://reqres.in/api/users/2`);
=======
<<<<<<< HEAD
    return this.http.get(`http://192.168.1.244:4100/app/users/list`);
>>>>>>> 985ed59fb43d2b1a5a9b09f82e91f8a1907d3590
  }

  createUser(userObj){
    return this.http.post(`http://192.168.1.244:4100/app/users/create`, userObj)
<<<<<<< HEAD
  }
>>>>>>> 985ed59fb43d2b1a5a9b09f82e91f8a1907d3590

  login(){
    return this.http.get(`https://reqres.in/api/users/2`);
=======
=======
    return new Promise((resolve, reject)=>{
      let user = [
        {
          "name" : "saroj",
          "age" : 22,
          "salary" : 22222,
          'currentRate' : 3,
        	'date' : "2/2/2019"
        }
      ];
      resolve(user);
    })
>>>>>>> 9e83b26e2f2bf7e307ff1841602c89c6a742284f
>>>>>>> 985ed59fb43d2b1a5a9b09f82e91f8a1907d3590
  }

}
