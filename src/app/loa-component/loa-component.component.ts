import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loa-component',
  templateUrl: './loa-component.component.html',
  styleUrls: ['./loa-component.component.css']
})
export class LoaComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typeOfRate = ' '
  majorAmount = ' '
  years = ' '
  emi = ' '
  totalAmount = ' '
  typeRate(rate:any){
    this.typeOfRate = rate  
  }


  calculateAll(amount:any,years:any){
    this.majorAmount = amount
    console.log(this.majorAmount)
    this.years = years
    var a:any = this.typeOfRate
    //one month interest
    //in terms of month
    var totalMonths:any = years*12
    console.log(totalMonths)


    //total interest for a year
    var interstInMonths:any = (a/100)/12;
    console.log(interstInMonths)
    
    let A:any = ' '

    A = Math.floor(amount *((interstInMonths* (Math.pow((1+interstInMonths),totalMonths))) )
     /  (Math.pow((1+interstInMonths),totalMonths) -1 ))
    this.emi = A
     console.log(A);
    // A = P (r (1+r)^n) / ( (1+r)^n -1 )

   //total amount payable
    var totalAmountPayable:any = A*12
    this.totalAmount = totalAmountPayable
    // console.log(totalAmountPayable)

  }
}
