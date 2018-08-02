import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { UserService } from '../user.service';
import { User } from '../content/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})

export class SignupComponent implements OnInit {
  model : any = <User>{} || []

  constructor(private router: Router, private userService : UserService) {}

  ngOnInit(){}

  onSubmit(formData) { 
   this.userService.createUser(this.model).subscribe(
     (result)=>{
       this.userService.loggedIn = true
       this.router.navigate(['/']);
     },
     (err)=>{
       console.log(err)
     }
   )}

}
