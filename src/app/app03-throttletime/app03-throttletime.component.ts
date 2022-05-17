import { Component, OnInit } from '@angular/core';
import {fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

@Component({
  selector: 'app-app03-throttletime',
  templateUrl: './app03-throttletime.component.html',
  styleUrls: ['./app03-throttletime.component.css']
})
export class App03ThrottletimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fromEvent(document, 'click')
    .pipe(
      throttleTime(1000),
      scan(count => count + 1, 0)
    )
    .subscribe(count => console.log(`Click ${count} lines`));
  }

}
