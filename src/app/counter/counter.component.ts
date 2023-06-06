import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0
  incrementCount() {
    this.count += 1
  }
  resetCount() {
    this.count = 0
  }
}
