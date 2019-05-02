import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { MainSidenavComponent } from './_components/main-sidenav/main-sidenav.component';
import { SubSidenavComponent } from './_components/sub-sidenav/sub-sidenav.component';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './_components/topbar/topbar.component';
import { ActionComponent } from './_components/action/action.component';
import { TopnavComponent } from './_components/topnav/topnav.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSidenavComponent,
    SubSidenavComponent,
    LoginComponent,
    TopbarComponent,
    ActionComponent,
    TopnavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
