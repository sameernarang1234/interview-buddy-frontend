import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  links: string[] = [
    "Dashboard",
    "Feedbacks",
    "Templates",
    "Users"
  ];
  blankCards: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      this.blankCards.push(true);
    }
  }

}
