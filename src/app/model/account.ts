export class Account
{
    PiaUserId:number;
    FirstName:string;
    MiddleName:string;
    LastName:string;
    UserName:string;
    Password:string;
    PiaUserTypeId:number;
    DateCreated:Date;
    IsActive:boolean;
    CurrencyAssigned:CurrencyAssigned[];
}

export class CurrencyAssigned
{
    PiaUserId:number;
    CurrencyCode:string;
    IsActive:boolean;
} 
