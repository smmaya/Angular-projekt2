import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cw3',
  templateUrl: './cw3.component.html',
  styleUrls: ['./cw3.component.css']
})
export class Cw3Component implements OnInit {

title = 'Dni tygodnia:';
dniTygodnia = [
'poniedziałek',
'wtorek',
'środa',
'czwartek',
'piątek',
'sobota',
'niedziela'
];
stanAplikacji = ['start', 'koniec'];

pers1 = new Osoba('Arek', 'Arecki', 15);
pers2 = new Osoba('Marek', 'Marecki', 25);
pers3 = new Osoba('Darek', 'Darecki', 35);
pers4 = new Osoba('Jarek', 'Jarecki', 72);
listaOsob = [this.pers1, this.pers2, this.pers3, this.pers4];

  constructor() { }

  ngOnInit(): void {
  }

}

class Osoba {
  constructor(public imie: string, public nazwisko?: string, public wiek?: number) { } 
}