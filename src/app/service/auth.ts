import {  Injectable } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
 
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
    private _router: Router,private localStorageService: LocalStorageService){}
 
  logout() {
    this.localStorageService.remove("user");
    this._router.navigate(['login']);
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
    if (this.localStorageService.get("user") === null){
        this._router.navigate(['login']);
    }
  } 
}