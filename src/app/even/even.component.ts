import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Initializing app even');
  }
}
