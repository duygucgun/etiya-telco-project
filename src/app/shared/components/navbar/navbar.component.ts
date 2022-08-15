import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/core/auth/services/services/auth.service';

@Component({
  selector: 'etiya-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
 constructor(private authService:AuthService){}


  ngOnInit() {}
    
    logOut(){
      this.authService.logOut();
    }

    isLoggedIn(){
    return this.authService.isAuthenticated
  }
  }

