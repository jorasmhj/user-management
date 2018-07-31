import { Component, OnInit } from '@angular/core';
import { User } from './user'

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from  '../user.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	user : any = <User> {} || []
	currentRate = this.user.currentRate = 0
	people = []
  closeResult: string;
  editIndex : number = null
  editMode = false
  abc = 1.3
  birthday = new Date();
  myNumber : number = 25
  currencies = ["aud","usd"]
  selectedCurrency = "s"
  model;
  stud : any



  constructor(private userService : UserService ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUser()
    .subscribe(userList=>{
      this.stud = userList['data'];
    },userListErr=>{
      console.log(userListErr)
    })
<<<<<<< HEAD
      this.userService.profile()
      .subscribe(userList=>{
        this.stud = userList['data'];
      },userListErr=>{
        console.log(userListErr)
      })
  }




  createtUser(){
    let userobj = {
       "firstName": "Saroj",
        "lastName": "Maharjan",
         "email": "jorasmhj@gmail.com",
          "password": "123456789",
           "address": "Lazimpat, Kathmandu",
            "bio": "",
             "dob": "",
              "salary": ""
    }
    this.userService.createUser(userobj)
    .subscribe(userList=>{
      this.stud = userList['data'];
    },userListErr=>{
      console.log(userListErr)
    })
  }


=======
  }




  createtUser(){
    let userobj = {
       "firstName": "Saroj",
        "lastName": "Maharjan",
         "email": "jorasmhj@gmail.com",
          "password": "123456789",
           "address": "Lazimpat, Kathmandu",
            "bio": "",
             "dob": "",
              "salary": ""
    }
    this.userService.createUser(userobj)
    .subscribe(userList=>{
      this.stud = userList['data'];
    },userListErr=>{
      console.log(userListErr)
    })
  }


>>>>>>> 985ed59fb43d2b1a5a9b09f82e91f8a1907d3590
  onSubmit(){
  	this.user.currentRate = this.currentRate
    console.log(this.user.date);
  	this.people.push(this.user)
  	this.user = {}
    this.currentRate = 0
  	console.log(this.people);
  }

  editUser(){
    this.people[this.editIndex] = this.user
    this.editMode = false
    this.user = {}
  }

  removePerson(index){
    this.people.splice(index, 1);
  }

  doEdit(index){
    this.editIndex = index
    this.user = this.people[index]
    this.currentRate = this.user.currentRate
    this.editMode = true
  }

  doAdd(){
    this.editIndex = null
    this.user = {}
    this.currentRate = 0
    this.editMode = false
  }

}
