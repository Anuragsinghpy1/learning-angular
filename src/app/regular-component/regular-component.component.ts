import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-component',
  templateUrl: './regular-component.component.html',
  styleUrls: ['./regular-component.component.css'],
})
export class RegularComponentComponent {
  title = 'Angular-start';
  myname = 'Anurag';
  show = true; // properties
  color = 'green';
  // switch case
  sky = 'orange';

  // for loop
  user = ['Akash', 'Deepinder', 'Anmol', 'Abhijeet', 'kunal'];

  userData = [
    {
      Name: 'Anurag',
      Age: '22',
      Email: 'anuragsingh@gmail.com',
      Mobile: '0987654321',
    },
    {
      Name: 'Akash',
      Age: '23',
      Email: 'akash@gmail.com',
      Mobile: '1234567890',
    },
    {
      Name: 'Anmol',
      Age: '21',
      Email: 'anmolsingh@gmail.com',
      Mobile: '9087543256',
    },
    {
      Name: 'Abhijeet',
      Age: '24',
      Email: 'abhijitsingh@gmail.com',
      Mobile: '9845231246',
    },
  ];

  //nested loop
  userNestedData = [
    {
      user: 'Iron Man',
      power: 'IronSuite',
      socialMedia: ['Facbook', 'Instagram', 'Twitter'],
    },
    {
      user: 'Hulk',
      power: 'Smash',
      socialMedia: ['Facbook', 'Instagram', 'Twitter'],
    },
    {
      user: 'Thor',
      power: 'Hammer',
      socialMedia: ['Facbook', 'Instagram', 'Twitter'],
    },
    {
      user: 'Captian',
      power: 'Shield',
      socialMedia: ['Facbook', 'Instagram', 'Twitter'],
    },
  ];

  //click function
  getBtn() {
    alert('Learning function');
  }

  getDataconsole() {
    console.warn('get the data in console');
  }

  // keyup function

  getData(value: any) {
    console.warn(value);
  }

  // print the input value in screen

  displayValue: string = '';
  getValue(value: string) {
    console.warn(value);
    this.displayValue = value;
  }

  // no. counter

  count = 0;
  counter(type: string) {
    type === 'minus' ? this.count-- : this.count++;
  }

  // style binding

  updatecolor = 'blue';
  bgColor = 'orange';

  UpdateColorBtn() {
    this.updatecolor = 'red';
    this.bgColor = 'yellow';
  }
}
