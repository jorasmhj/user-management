import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  state: string = '';
  error: any;
  email : string
  password : string

  constructor(private router: Router, private userService : UserService) {}

  ngOnInit(){}

  onSubmit(formData) {
     if(formData.valid) {
       this.router.navigate(['/']);
       this.userService.loggedIn = true
     }
     else
      this.error = "Can't sign you up at the moment";
   }

}
