import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-north-east',
  templateUrl: './north-east.component.html',
  styleUrls: ['./north-east.component.scss']
})
export class NorthEastComponent implements OnInit {

  constructor() {
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

}
