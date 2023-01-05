import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-website-gandhi';

  showLoader = true;

  constructor(public router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.showLoader = false;
      window.scroll(0,0);
    }, 2000);
  }

}
