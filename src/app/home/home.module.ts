import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { BankComponent } from "./bank/bank.component";
import { HomeComponent } from "./home.component";
import { AccountComponent } from "./account/account.component";
import { CommonModule }   from '@angular/common';
import {DataGridModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import {DropdownModule} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationControlComponent } from "../shared/validation-control/validation-control.component";
import {SelectButtonModule} from 'primeng/primeng';
import {DataScrollerModule} from 'primeng/primeng';

@NgModule({
  declarations: [
   ValidationControlComponent,
  HomeComponent ,
    AccountComponent,
    BankComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    DataGridModule,DataTableModule,SharedModule,DialogModule,DropdownModule,SelectButtonModule,
    DataScrollerModule
  ],

})
export class HomeModule { }