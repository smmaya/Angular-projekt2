import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cw1',
  templateUrl: './cw1.component.html',
  styleUrls: ['./cw1.component.css']
})
export class Cw1Component implements OnInit {

 constructor() { }

  ngOnInit(): void {
  }

  title = 'projekt2';
  inputTekst = 'Przykładowy tekst'; 
  date = new Date();
  liczbaE = Math.E;
  osoba = new Osoba('Sławomir Majchrzak', '' ,49);
  osoba2 = new Osoba('Sławek', '' ,49);
  osoba3 = new Osoba('Adam', 'Słodowy', 50);
  indeks = (60000 + 473);
  pi = Math.PI;
  tablica:any[] = [10, 'słoni', 'minus', 2.5, 'słonie', 'to', 7.5, 'pozistałych'];

}

class Osoba {
  constructor(public imie: string, public nazwisko?: string, public wiek?: number) { } 
}