import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login';

  constructor() { }

  ngOnInit() {
  }

}
