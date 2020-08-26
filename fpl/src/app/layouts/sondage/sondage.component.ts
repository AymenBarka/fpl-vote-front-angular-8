import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit() {

  }
  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
