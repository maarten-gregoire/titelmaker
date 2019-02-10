import { Component, OnInit } from '@angular/core';
import {TitelService} from '../services/titel/titel.service';
import {CategorieService} from '../services/categorie/categorie.service';
import {Randoms} from '../util/randoms';

@Component({
  selector: 'tm-titelgenerator',
  templateUrl: './titelgenerator.component.html',
  styleUrls: ['./titelgenerator.component.css']
})
export class TitelgeneratorComponent implements OnInit {

  gegenereerdeTitel: string;
  gekozenCategorie: string;
  bepaaldeDuur: string;

  constructor(private titelService: TitelService, private categorieService: CategorieService) {}

  ngOnInit() {
  }

  genereerSuggestie() {
    this.genereerTitel();
    this.bepaalCategorie();
    this.bepaalDuur();
  }

  genereerTitel() {
    this.titelService.maaktitel().subscribe((titel) => {
      this.gegenereerdeTitel = titel;
    });
  }

  bepaalCategorie() {
    this.categorieService.bepaalCategorie().subscribe((categorie) => {
      this.gekozenCategorie = categorie;
    });
  }

  bepaalDuur() {
    const duur: number = Randoms.maakRandomGetalTussenEnInbegrepen(1, 10);
    this.bepaaldeDuur =  duur + ((duur !== 1) ? ' minuten' : ' minuut');
  }

  reset() {
    this.gegenereerdeTitel = undefined;
    this.gekozenCategorie = undefined;
    this.bepaaldeDuur = undefined;
  }

}
