import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buffers?: number[] = [];

  /**
   * Increments the number of component elements
   *
   * @param num number that is being incremented
   */

  onIncrement(num: number) {
    if (typeof this.buffers !== 'undefined') {
      console.log(`Pushing number: ${num}`);
      this.buffers?.push(num);
    } else {
      console.error('Buffers are undefined, initializing to empty array');
      this.buffers = [];
      console.log(`Pushing ${num} to newly initialized array`);
      this.buffers.push(num);
    }
  }
}
