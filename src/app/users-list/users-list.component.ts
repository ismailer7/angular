import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // dont forget to import service

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users = []
  public message: string
  // Dependency injection : declare service inside constructor
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAllUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
    // this._userService.hello().subscribe(data => {
    //   this.message = data
    //   console.log(this.message)
    // })
  }

}
