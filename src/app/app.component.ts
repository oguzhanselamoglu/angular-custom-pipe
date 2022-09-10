
import { Component,VERSION } from '@angular/core';
import { PersonDto } from './models/personDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-custom-pipe';
  date: Date = new Date();
  personel: any[] = [
    { age: 21, name: 'oguzhan' },
    { age: 21, name: 'Ali' },
    { age: 28, name: 'Ahmet' },
    { age: 29, name: 'Mehmet' },
    { age: 35, name: 'Burak' },
    { age: 35, name: 'veli' }
  ];

   model: PersonDto = {
    age:'',
    name:''
  };
  filter={}

  updateFilters() {
    Object.keys(this.model).forEach(key => this.model[key as keyof PersonDto] === '' ? delete this.model[key as keyof PersonDto] : key);
    this.filter = Object.assign({}, this.model);
  }
  /**
   *
   */
  constructor() {


  }
}
