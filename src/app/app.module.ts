import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App01FromEventComponent } from './app01-from-event/app01-from-event.component';
import { App02ScanReduceComponent } from './app02-scan-reduce/app02-scan-reduce.component';

@NgModule({
  declarations: [
    AppComponent,
    App01FromEventComponent,
    App02ScanReduceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
