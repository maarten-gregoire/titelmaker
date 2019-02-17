import { Component, OnInit } from '@angular/core';
import {TitelService} from '../../services/titel/titel.service';
import {CategorieService} from '../../services/categorie/categorie.service';
import {Randoms} from '../../util/randoms';
import {TitelCategorieSpeelduurCombinatie} from '../../models/titel-categorie-speelduur-combinatie';

@Component({
  selector: 'tm-bulk-generator',
  templateUrl: './bulk-generator.component.html',
  styleUrls: ['./bulk-generator.component.css']
})
export class BulkGeneratorComponent implements OnInit {

  titelCombinaties: TitelCategorieSpeelduurCombinatie[] = [];

  constructor(private titelService: TitelService, private categorieService: CategorieService) {
  }

  ngOnInit() {
  }

  genereerTitels() {
    this.titelCombinaties = [];
    let combinatie: TitelCategorieSpeelduurCombinatie = new TitelCategorieSpeelduurCombinatie();
    for (let i = 0; i < 100; i++) {
      combinatie = new TitelCategorieSpeelduurCombinatie();
      combinatie.speelduur = this.bepaalDuur();
      this.titelService.maaktitel().subscribe(t => {
          combinatie.titel = t;
          this.categorieService.bepaalCategorie().subscribe(c => {
            combinatie.categorie = c;
            this.titelCombinaties.push(combinatie);
          }
        );
        }
      );
    }
  }

    private bepaalDuur(): string {
      const duur: number = Randoms.maakRandomGetalTussenEnInbegrepen(1, 10);
      return  duur + '\'';
    }

  reset() {
    this.titelCombinaties = [];
  }
}

