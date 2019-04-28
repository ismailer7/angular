import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _userService: UserService) { }

  email: string

  password: string

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.email + " " + this.password)
    let data = {'email': this.email, 'password': this.password}
    this._userService.loginUser(data).subscribe(
      data => {
          if (data) {
            console.log('success' + data)
            // save in localStorage
            // redirect to home component
          } else {
            console.log('error')
          }
      }

    )
  }

}
