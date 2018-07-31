import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn : boolean = false;

  constructor() { }

  getUser(){
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
  }

}
