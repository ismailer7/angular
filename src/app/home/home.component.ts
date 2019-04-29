import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Post } from '../models/Post' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: object

  posts: any[]


  constructor(private router: Router, private _userService: UserService) { 
    console.log('home here test')
    //this.data = this.router.getCurrentNavigation().extras.state
    if(localStorage.getItem('currentUser') != null) {
      this.data = JSON.parse(localStorage.getItem('currentUser'))
      console.log('id of user : ' + this.data['id'])
      this._userService.getAllPost(this.data['id']).subscribe(
        data => {
          console.log('all posts : ')
          console.log(data)
          this.posts = data;
        })
    }
  }

  ngOnInit() {
    // this.route.data
    //   .subscribe(v => { 
    //     this.test = v.test
    //     console.log(this.test)
    //   }
    //   );
  }

}
