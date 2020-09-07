import { Component } from '@angular/core';
declare function myTest(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'D\'ARKWAVE7';
  display: boolean = false;

  toggleDisplay() {
    this.display = !this.display;
  }
}
