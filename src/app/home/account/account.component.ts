import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AccountService } from "../../service/account-service";
import { Account } from "../../model/account";
import { SelectItem } from "primeng/primeng";
import { UserTypeService } from "../../service/userType-service";
import { UserType } from "../../model/userType";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[AccountService,UserTypeService]
})
export class AccountComponent implements OnInit {
accounts:Account[];
  selectedAccount:Account;
  displayDialog:boolean;
  newAccount:boolean;
  account:Account = new Account();
  displayDelete:boolean;
ut: SelectItem[];
  userTypes:UserType[];
    selectedUserType: string;


  constructor (
    private accountService:AccountService,private userTypeService:UserTypeService
    
      
  ) { //this.ut=[];
    //this.ut.push({label:'All',value:null});
   /* this.getUserType();
    for (var index = 0; index < this.userTypes.length; index++) {
      var element = this.userTypes[index];
      this.ut.push({label:element.Name,value:element.Id});
    }*/
    // this.ut.push({label:this.userTypes[1].Name,value:this.userTypes[1].Id});
}

  getAccounts():void{
    this.accountService.getAccounts().then(accounts=>this.accounts=accounts);
  }
  getUserType():void{
    this.ut=[];
    this.ut.push({label:'All',value:null});
    //this.userTypeService.getUserTypes().then(userTypes=>this.userTypes=userTypes);
      this.userTypeService.getUserTypes().then(a=>{
        a.forEach(element => {
            this.ut.push({label:element.Name,value:{id:element.Id,name:element.Name}});
        }
        )});
  }
 
  ngOnInit(): void{
    this.getAccounts();
    this.getUserType();
    this.selectedAccount=null;
    
    
    
  }
  onSelect(account:Account):void{
    this.selectedAccount=account;
  }

   showDialogToAdd() {
        this.newAccount = true;
        this.account = new Account();
        this.displayDialog = true;
        this.displayDelete=false;
    }
    
    save() {
        if(this.newAccount)
            this.accounts.push(this.account);
        else
            this.accounts[this.findSelectedAccountIndex()] = this.account;
        
        this.account = null;
        this.displayDialog = false;
    }
    
    delete() {
        if(this.findSelectedAccountIndex()>-1)
        {
        this.accounts.splice(this.findSelectedAccountIndex(), 1);
        this.account = null;
        this.displayDialog = false;
        }
    }    
    
    onRowSelect(event) {
        this.newAccount = false;
        this.account = this.cloneAccount(event.data);
        this.displayDialog = true;
        this.displayDelete=true;
    }
    
    cloneAccount(c: Account): Account {
        let account = new Account();
        for(let prop in c) {
            account[prop] = c[prop];
        }
        return account;
    }
    
    findSelectedAccountIndex(): number {
        return this.accounts.indexOf(this.selectedAccount);
    }
}
