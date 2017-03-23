import { Account } from "../model/account";
import { Injectable } from '@angular/core';
import { Accounts } from '../mockData/mock-account';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { LocalStorageService } from "angular-2-local-storage/dist";
import { Observable } from "rxjs/Observable";

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class AccountService{
    headers: Headers;
    options: RequestOptions;
 constructor(
    private http:Http,private localStorageService: LocalStorageService)
    {
  this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        var jwt = this.localStorageService.get("token");
         if(jwt) {
        this.headers.append('Authorization', 'Bearer ' + jwt);     
         }
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAccounts():Promise<Account[]>
    {
        return Promise.resolve(Accounts);
    }
    getAccount(id:number):Promise<Account>
    {
        return this.getAccounts().then(accounts=>accounts.find(account=>account.PiaUserId===id));
    }
    getPiaAccount()
    {
   
        var jwt = this.localStorageService.get("token");
  var authHeader = new Headers();
  if(jwt) {
    authHeader.append('Authorization', 'Bearer ' + jwt);      
  }
 var body = `"{\"PiaUserTypeId\":2,\"Status\":1,\"PageNumber\":1,\"PageSize\":10}"`;
 /* this.http.post('http://172.25.32.22/PIAPI/api/user/GetPiaUsers', body , {headers: authHeader})
  .map(res => res.json()
  .subscribe(
    data => test = data,
    err => console.log(err),
    () => console.log('Call Complete')
  ));*/

     return this.http
                .post('http://172.25.32.22/PIAPI/api/user/GetPiaUsers', body , {headers: authHeader})
                .map((request) => request.json());

    }

    createService(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
        .post(url, body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }   

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}