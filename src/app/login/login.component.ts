import { Component, OnInit } from '@angular/core';
import { moveIn } from '../router.animations';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../content/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  error : string
  user : any = <User> {} || []

  constructor(private router: Router, private userService : UserService) { }

  ngOnInit() {
  }

  login(formData){
    this.userService.login(this.user).subscribe((data)=>{
      this.router.navigate(['/']);
      localStorage.setItem('currentUser', JSON.stringify(data['token']));
      this.userService.loggedIn = true;
    }, (err)=>{
      console.error(err);
    });
  }

}
