import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private loginUrl = '';

  constructor(private http: HttpClient) { }

  loginUser(userData) {
    return this.http.post<any>(this.loginUrl, userData);
  }

}
