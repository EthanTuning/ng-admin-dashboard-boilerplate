import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from '../_components/topbar/topbar.component';
import { TopnavComponent } from '../_components/topnav/topnav.component';
import { MainSidenavComponent } from '../_components/main-sidenav/main-sidenav.component';
import { SubSidenavComponent } from '../_components/sub-sidenav/sub-sidenav.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
