import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { BankingCalcComponent } from './banking-calc/banking-calc.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { ContactComponent } from './contact/contact.component';
import { FixedComponent } from './fixed/fixed.component';
import { HomeComponent } from './home/home.component';
import { LoaComponentComponent } from './loa-component/loa-component.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
      children : [
        {
          path: 'newAccount',
          component: NewAccountComponent,
        },
      ],
    },
{
  path : "banking",
  component: BankingCalcComponent,
  children : [
    {
      path: 'loan',
      component: LoaComponentComponent,
    },
    {
      path: 'fixed',
      component: FixedComponent,
    },
  ],
},
{
  path : "checkBal",
  component: CheckBalanceComponent
},
{
  path : "newAccount",
  component: NewAccountComponent
},
{
  path : "payment",
  component: PaymentComponent
},
{
  path : "fixed",
  component : FixedComponent
},
{
  path: "loan",
  component: LoaComponentComponent
},
{
  path: "contact",
  component: ContactComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
