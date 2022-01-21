import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  create(name:any,phone:any,acc:any,initial:any,remaining:any){
    localStorage.setItem("Entryname",name)
    localStorage.setItem("Entryphone",phone)
    localStorage.setItem("Entryacc",acc)
    localStorage.setItem("Entryinitial",initial)
    localStorage.setItem("Entryremaining",remaining)
    alert("THANKS FOR THE ENQUIRY")
    }
    

}
