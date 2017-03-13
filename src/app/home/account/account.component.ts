import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AccountService } from "../../service/account-service";
import { Account } from "../../model/account";
import { SelectItem } from "primeng/primeng";
import { UserTypeService } from "../../service/userType-service";
import { UserType } from "../../model/userType";
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { accountValidation } from "./account.validation";
import { ValidationControlComponent } from "../../shared/validation-control/validation-control.component";
import { ValidationService } from "../../service/validation-service";



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[AccountService,UserTypeService],
 
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
  accountForm:FormGroup;  
  accountValidationForm:accountValidation;
  
  constructor (
    private accountService:AccountService,private userTypeService:UserTypeService
    ,private formBuilder:FormBuilder
      
  ) { 
    
    this.createForm();
}

  createForm()
  {
    this.accountForm=this.formBuilder.group(
      {
        firstName:['', [Validators.required
                       ,Validators.maxLength(50)
                       ,Validators.minLength(4)
                       ,ValidationService.alphabetValidator
                       ] ],
        middleName:['', Validators.required ],
        lastName:['', Validators.required ],
        userName:['',[Validators.required]],
        password:['',[Validators.required]],
        confirm:['',[Validators.required]],
        userType:['',[Validators.required]],  
      }
    );

  }


 
  getAccounts():void{
    this.accountService.getAccounts().then(accounts=>this.accounts=accounts);
  }
  getUserType():void{
    this.ut=[];
    this.ut.push({label:'All',value:null});
    
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
