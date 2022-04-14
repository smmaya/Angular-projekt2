import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cw2',
  templateUrl: './cw2.component.html',
  styleUrls: ['./cw2.component.css']
})
export class Cw2Component implements OnInit {

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
stanAplikacji = ['Start', 'Koniec'];

pers1 = new Osoba('Arek', 'Arecki', 15);
pers2 = new Osoba('Marek', 'Marecki', 25);
pers3 = new Osoba('Darek', 'Darecki', 35);
pers4 = new Osoba('Jarek', 'Jarecki', 72);
listaOsob = [this.pers1, this.pers2, this.pers3, this.pers4];

  students: Array<Student> = [
    { "imie": 'Sławek', "wiek": 49, "czyStudent": true },
    { "imie": 'Darek', "wiek": 19, "czyStudent": true },
    { "imie": 'Daria', "wiek": 19, "czyStudent": true },
    { "imie": 'Jarek', "wiek": 36, "czyStudent": false },
    { "imie": 'Stefan', "wiek": 62, "czyStudent": false },
    { "imie": 'Stefania', "wiek": 66, "czyStudent": false },
    { "imie": 'Anna', "wiek": 26, "czyStudent": true }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

class Student {
  constructor(public imie: string, public wiek: number, public czyStudent: boolean) { } 
}

class Osoba {
  constructor(public imie: string, public nazwisko?: string, public wiek?: number) { } 
}
