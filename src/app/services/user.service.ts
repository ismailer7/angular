import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User'
import { HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _urlHello: string = "http://192.168.43.232:8087/demo/hello/"

  private _urlUsers: string = "http://192.168.43.232:8087/allUsers"

  // dependency injection
  constructor(private http: HttpClient) { }

  // hello():Observable<any> {
  //   return this.http.get(this._urlHello, {responseType: 'text'})
  // }

  // define user services
  getAllUsers(): Observable<User[]> {
    return this.http.get<any>(this._urlUsers)
  }

  getUserById(id: number): Observable<any> {
    return null;
  }

  register(user: any){
    return this.http.post<User>('http://192.168.43.232:8087/addUser', user, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );
  }

  update(user: User) {}

  delete(id: number) {}

  loginUser(data: any): Observable<User> {
    return this.http.post<User>('http://192.168.43.232:8087/getUserDTO', data, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );
  }

  getAllPost(id: number): Observable<any> {
    return this.http.get<any>(`http://192.168.43.232:8087/DTOPosts?id=${id}`)
      .pipe(

      );
  }









}
