import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { BankComponent } from "./bank/bank.component";
import { HomeComponent } from "./home.component";
import { AccountComponent } from "./account/account.component";
import { CommonModule }   from '@angular/common';
import {DataGridModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DropdownModule} from 'primeng/primeng';
@NgModule({
  declarations: [
  
  HomeComponent ,
    AccountComponent,
    BankComponent
  ],
  imports: [
      FormsModule,
    HttpModule,
    CommonModule,
    HomeRoutingModule,
    DataGridModule,DataTableModule,SharedModule,DialogModule,DropdownModule
  ],

})
export class HomeModule { }