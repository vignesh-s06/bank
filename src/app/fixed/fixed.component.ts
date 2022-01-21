import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed',
  templateUrl: './fixed.component.html',
  styleUrls: ['./fixed.component.css']
})
export class FixedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typeOfRate = ' ';
  majorAmount = ' ';
  years = ' ';
  emi = ' ';
  maturityAmount = ' ';
  typeRate(rate: any) {
    this.typeOfRate = rate;
  }

  calculateAll(amount: any, years: any) {
    this.majorAmount = amount;
    console.log(this.majorAmount);
    this.years = years;
    var a: any = this.typeOfRate;
    //one month interest
    //in terms of month
    var totalMonths: any = years;
    console.log(totalMonths);

    var b: any = a / 100;

    let A: any = ' ';

    A = Math.floor(amount * Math.pow(1 + b, years));

    console.log(A);

    // maturityamount = p*(1+r/100)^n

    this.maturityAmount = (A);
  }
}
