import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public first;
  public last;
  public avatar;
  public company;
  public email;

  constructor() {
    this.first = localStorage.getItem('first_name');
    this.last = localStorage.getItem('last_name');
    this.avatar = localStorage.getItem('avatar');
    this.company = localStorage.getItem('company');
    this.email = localStorage.getItem('email');
  }

}
