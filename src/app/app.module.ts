import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', children: [
    {path: '', component: LoginComponent,},
    {path: 'register', component: RegisterComponent},
  ]},
  {path: 'home', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    RegisterComponent,
    IndexComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
