import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	menus = ["Home","About", "Services", "Contact Us"]
  loggedIn : boolean = false
  constructor(private userService : UserService, private router : Router ) {}

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/login']);
    this.userService.loggedIn = false;
  }

}
