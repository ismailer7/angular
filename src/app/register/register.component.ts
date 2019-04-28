import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;

  email: string;

  password: string;

  confirmPassword: string;

  gender: string;

  birthDate: Date;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submitted')
    // user user service to post submited data to the server.
    console.log(this.name + " " + this.email + " " + this.password + " " + this.gender + " " + this.birthDate)

    let data = {'name': this.name,'email': this.email, 'password': this.password, 'gender': this.gender, 'birthDay': this.birthDate, 'status': false}
    console.log(data)
    this._userService.register(data).subscribe(
      data => console.log(data)
    )
  }

}
