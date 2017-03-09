import { Injectable } from "@angular/core";
import { UserTypes } from "../mockData/mock-userType";
import { UserType } from "../model/userType";
import { SelectItem } from "primeng/primeng";

@Injectable()
export class UserTypeService{
    getUserTypes():Promise<UserType[]>
    {
        return Promise.resolve(UserTypes);
    }
  /*   getUserTypesDropDown():Promise<SelectItem[]>
    {
        SelectItem[]= SelectItem;
        this.getUserTypes().then(a=>{
        a.forEach(element => {
            
        }
        )});
        return Promise.resolve(UserTypes);
    }*/
   
}