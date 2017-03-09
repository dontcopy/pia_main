import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from "./account/account.component";
import { HomeComponent } from "./home.component";
import { BankComponent } from "./bank/bank.component";

const homeRoutes: Routes = [
  { path: '',
  component:HomeComponent,
  children:[
 
  { path: 'bank',  component: BankComponent},
  { path: '',  component: AccountComponent }
  ]
  },
 
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}