import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  title = 'Login';
  loginUserData = {};

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  loginUser() {

    this.authService.loginUser(this.loginUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
