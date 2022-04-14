import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cw5',
  templateUrl: './cw5.component.html',
  styleUrls: ['./cw5.component.css']
})
export class Cw5Component implements OnInit {

  constructor() { }

  inputText = 'Moj input';
  zmienKolor = 'color-black';
  isDisabled = true;
  logo = '';
  htmlContent = '';
  zmienButton = '';
  nazwaKlasy = this.zmienKolor;

  ngOnInit(): void {
  }

  zmienUstawienia() {
    this.inputText = 'tekst zmieniony';
    this.zmienKolor = 'color-brown';
    this.isDisabled = false;
    this.logo = 'https://angular.io/assets/images/logos/angular/angular.svg';
    this.htmlContent = '<div class="text-center"><b><i>Sławomir Majchrzak</i></b></div>'
    this.zmienButton = 'nieedytowalny';
  }

  getClass() {
    return 'nazwaKlasy';
  }

}
