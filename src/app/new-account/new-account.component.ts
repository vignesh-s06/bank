import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


create(name:any,phone:any,acc:any,upi:any,initial:any,remaining:any){
localStorage.setItem("name",name)
localStorage.setItem("phone",phone)
localStorage.setItem("acc",acc)
localStorage.setItem("upi",upi)
localStorage.setItem("initial",initial)
localStorage.setItem("remaining",remaining)

}
}
