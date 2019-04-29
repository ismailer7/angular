import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // checkUser : boolean = false
  title = 'First Application with Angular';

  constructor(private router: Router) {
    console.log('running..')

    if(localStorage.getItem('currentUser') != null) {
      // this.checkUser = true
      this.router.navigate(['/home'])
    }
    // console.log(this.checkUser)
  }
}
