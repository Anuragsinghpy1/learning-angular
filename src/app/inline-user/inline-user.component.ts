import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-user',
  templateUrl: './inline-user.component.html',
  styles: [
    `
      .inline-css {
        color: blue;
      }
    `,
  ],
})
export class InlineUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
