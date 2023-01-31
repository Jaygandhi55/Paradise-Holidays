import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goa',
  templateUrl: './goa.component.html',
  styleUrls: ['./goa.component.scss']
})
export class GoaComponent implements OnInit {

  constructor() {
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

}
