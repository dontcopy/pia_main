import {  Injectable } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
export class User {
  constructor(
    public username: string,
    public password: string) { }
}



 
@Injectable()
export class AuthenticationService {
 
  constructor(
    private http:Http,private _router: Router,private localStorageService: LocalStorageService){}

  logout() {
    this.localStorageService.remove("token");
    this._router.navigate(['login']);
  }
  authenticate(user) {
  var body = `username=${user.username}&password=${user.password}&grant_type=password`;
  
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  
  this.http.post('http://172.25.32.22/PIAPI/oauth2/token', body , {headers: headers})
  .map(response=>response.json())
  .subscribe(
    data => this.storeToken(data),
    err => console.log(err),
    () => console.log('Call Complete')
  );
 
}

getAuth(user) {
  var body = `username=${user.username}&password=${user.password}&grant_type=password`;
  this.http.get('http://172.25.32.22/PIAPI/oauth2/token'+body)
    .map(res => res.json())
    .subscribe(
      res => this.storeToken(res.access_token) ,
      () => console.log('Auth Complete')
    );
}

  storeToken(response)
  {
      console.log('Received:' + response)
      
      if (response.access_token!=null){
    this.localStorageService.set("token", response.access_token);
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