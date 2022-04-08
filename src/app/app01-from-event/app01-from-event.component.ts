import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-app01-from-event',
  templateUrl: './app01-from-event.component.html',
  styleUrls: ['./app01-from-event.component.css']
})
export class App01FromEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fromEvent(document, 'click').subscribe(() => console.log('humberto clicked'));
  }

}
