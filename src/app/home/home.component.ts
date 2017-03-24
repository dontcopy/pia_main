import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/auth";

@Component({
  selector: 'app-login',
  providers:[AuthenticationService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
constructor(
        private _service:AuthenticationService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
 
}
