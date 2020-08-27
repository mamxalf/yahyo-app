import { Component } from '@angular/core';
import { PEOPLE } from "../../assets/people";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public people = PEOPLE;

  constructor() {}

  detailpeople(p:string):void{
    localStorage.setItem("first_name", p.first_name);
    localStorage.setItem("last_name", p.last_name);
    localStorage.setItem("email", p.email);
    localStorage.setItem("company", p.company);
    localStorage.setItem("avatar", p.avatar);
  }
}
