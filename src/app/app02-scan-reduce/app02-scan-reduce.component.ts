import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-app02-scan-reduce',
  templateUrl: './app02-scan-reduce.component.html',
  styleUrls: ['./app02-scan-reduce.component.css']
})
export class App02ScanReduceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fromEvent(document, 'click')
      .pipe(
        scan(count => count +1, 0)
      )
      .subscribe(count => console.log(`Clicked ${count} times`));
  }

}
