import { Component } from '@angular/core';
import pl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(pl);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = "projekt2"

}




