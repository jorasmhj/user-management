import { Component, OnInit } from '@angular/core';
import { moveIn } from '../router.animations';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  username : string

  constructor(private router: Router, private userService : UserService) { }

  ngOnInit() {
  }

  login(formData){
    if(formData.valid) {
      this.router.navigate(['/']);
      this.userService.loggedIn = true
      let user = {
        "email": "peter@klaven",
        "password": "cityslicka"
      }
      this.userService.login(user).subscribe((data)=>{
          if(data.token){
            this.userService.saveToken(data.token);
            this.router.navigate(['/']);
          }
      }, (err)=>{
        console.error(err);
      });
    }
    else
     this.error = "Can't sign you up at the moment";
  }

}
