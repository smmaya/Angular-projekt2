import { Component } from '@angular/core';

@Component({
  selector: 'app-cw4',
  templateUrl: './cw4.component.html',
  styleUrls: ['./cw4.component.css']
})

export class Cw4Component {

  dodawanie: string;
  usuwanie: string;

  osoby: Osoba[] = [];

  dodajOsoby() {
    this.osoby = [
      new Osoba('Kasia', 'Nowak', 24),
      new Osoba('Tomasz', null, 66),
      new Osoba('Andrzej', 'Wolny', 36)
    ];
    this.usuwanie = null;
  }

  usunOsoby() {
    this.osoby = [];
    this.dodawanie = null;
    this.usuwanie = "Osoby zostały usunięte.";
  }

}

class Osoba {
  constructor(public imie: string, public nazwisko?: string, public wiek?: number) { }
}


