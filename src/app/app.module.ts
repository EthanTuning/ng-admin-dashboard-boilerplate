import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';
import { SubSidenavComponent } from './sub-sidenav/sub-sidenav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSidenavComponent,
    SubSidenavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
