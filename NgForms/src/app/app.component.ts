import { Component } from '@angular/core';
import { Hero } from './hero'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular form demo application';
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(`Submitted data : ${this.diagnostic}`);
  }
  
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
