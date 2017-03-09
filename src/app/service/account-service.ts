import { Account } from "../model/account";
import { Injectable } from '@angular/core';
import { Accounts} from '../mockData/mock-account';
@Injectable()
export class AccountService{
    getAccounts():Promise<Account[]>
    {
        return Promise.resolve(Accounts);
    }
    getAccount(id:number):Promise<Account>
    {
        return this.getAccounts().then(accounts=>accounts.find(account=>account.PiaUserId===id));
    }
}