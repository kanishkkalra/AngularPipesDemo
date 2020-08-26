import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PiPeS DeMo';

  today = new Date();
  money;
  marks;
  age;
  name = 'Kanishk';
  num;

  weekdays = ['Mon' , 'Tue' , 'Wed' , 'Thurs' , 'Fri' , 'Sat' , 'Sun']

  student = {name:'Kanishk', age:222, course:'PGP Java', address:{city:'New Delhi', state:'Delhi', country:'India', pinCode:'110024'}}
  
  constructor(){
    this.money = 456;
    this.marks = 0.53;
    this.age = 22.2;
    this.num = 100;
  }

}
