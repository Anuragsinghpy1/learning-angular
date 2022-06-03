import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-user',
  template: ` <h1 class="template-user">template-user works!</h1> `,
  styleUrls: ['./template-user.component.css'],
})
export class TemplateUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
