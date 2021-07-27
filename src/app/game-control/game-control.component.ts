import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() start = new EventEmitter<number>();
  buff?: number;
  ref?: number;

  constructor() {}

  ngOnInit(): void {
    this.buff = 0;
  }

  /**
   * Fire this event when starting the game
   *
   */

  onStart() {
    this.ref = window.setInterval((buffer = this.buff) => {
      if (typeof buffer != 'undefined') {
        buffer++;
      } else {
        console.error('Buffer was undefined, initializing on 0');
        buffer = 0;
      }
      this.start.emit(buffer);
    }, 1000);
  }

  /**
   * Fire this event when ending the game
   *
   */

  onEnd() {
    if (typeof this.ref !== 'undefined') {
      clearInterval(this.ref);
    } else {
      console.error('Reference is type of undefined');
    }
  }
}
