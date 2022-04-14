import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cw4Component } from './cw4/cw4.component';
import { Cw3Component } from './cw3/cw3.component';
import { Cw2Component } from './cw2/cw2.component';
import { Cw1Component } from './cw1/cw1.component';
import { Cw5Component } from './cw5/cw5.component';

@NgModule({
  declarations: [
    AppComponent,
    Cw1Component,
    Cw2Component,
    Cw3Component,
    Cw4Component,
    Cw5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pl-PL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
