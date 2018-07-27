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

  constructor(private userService : UserService ) { }

  ngOnInit() {
    this.userService.getUser()
      .then(user=>{
        console.log(user)
      }).
      catch(error=>{
        console.log(error);
      })
  }

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
