import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-start';
  userData: any = {};

  getData(data: any) {
    console.warn(data);
    this.userData = data;
  }
}
