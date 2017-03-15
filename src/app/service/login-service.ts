
import { Injectable } from '@angular/core';

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