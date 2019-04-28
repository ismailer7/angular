import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
      // this.currentUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }

  login(email: string, password: string) {
    // send post request to the server 
    // check the response if there any user with the corresponding data
    // if yes then save the user in localstorage
    // and then return the user
  }

  logout() {
    // remove the user from localstoage
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }

}
