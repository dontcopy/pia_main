import {  Injectable } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
export class User {
  constructor(
    public email: string,
    public password: string) { }
}


var users = [
  new User('admin@admin.com','adm9'),
  new User('a@a','a'),
  new User('user1@gmail.com','a23')
];
 
@Injectable()
export class AuthenticationService {
 
  constructor(
    private http:Http,private _router: Router,private localStorageService: LocalStorageService){}

  logout() {
    this.localStorageService.remove("user");
    this._router.navigate(['login']);
  }
  authenticate(user) {
  var body = `username=${user.username}&password=${user.password}&grant_type=password`;
  
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  
  this.http
    .post('http://172.25.32.22/PIAPI/oauth2/token', body, { headers: headers })
    .map(response => response.json())
    .subscribe(
      response => this.storeToken(response.access_token),
    
      () => console.log('Authentication Complete')
    );
}
  storeToken(token)
  {
      this.localStorageService.set("token", token);
  }
  login(user){
  
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      this.localStorageService.set("user", authenticatedUser);
  
      this._router.navigate(['home']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (this.localStorageService.get("token") === null){
        this._router.navigate(['login']);
    }
  } 
}