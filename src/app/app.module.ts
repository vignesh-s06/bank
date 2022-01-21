import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BankingCalcComponent } from './banking-calc/banking-calc.component';
import { PaymentComponent } from './payment/payment.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { FixedComponent } from './fixed/fixed.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LoaComponentComponent } from './loa-component/loa-component.component';
import { ContactComponent } from './contact/contact.component';
import { StickyComponent } from './sticky/sticky.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankingCalcComponent,
    PaymentComponent,
    NewAccountComponent,
    CheckBalanceComponent,
    FixedComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LoaComponentComponent,
    ContactComponent,
    StickyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
