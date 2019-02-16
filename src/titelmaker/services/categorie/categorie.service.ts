import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Arrays} from '../../util/arrays';
import {categorieen} from '../../data/categorieen';
import {Categorie} from '../../models/categorie';
import {BijvoeglijkNaamwoord} from '../../models/bijvoeglijk-naamwoord';
import {emoties} from '../../data/bijvoeglijk-naamwoorden/emoties';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  recenteCategorieen: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(3);

  constructor() { }

  bepaalCategorie(): Observable<string> {
    let categorie: Categorie;
    do {
      categorie = Arrays.bepaalWillekeurigElemntUitRij<Categorie>(categorieen.filter(c => !this.recenteCategorieen.zitWoordInLijst(c)));
      if (!categorie) {
        this.recenteCategorieen.maakLeeg();
      }
    } while (!categorie);
    this.recenteCategorieen.voegWoordToe(categorie);
    let categorieString: string = categorie.categorie;
    if (categorieString === 'Emotievierkant') {
      categorieString = this.voegEmotiesToe(categorieString);
    }
    return of(categorieString);
  }

  private voegEmotiesToe(categorie: string): string {
      const emotiesVoorVierkant: BijvoeglijkNaamwoord[] = [Arrays.bepaalWillekeurigElemntUitRij<BijvoeglijkNaamwoord>(emoties)];

      do {
        emotiesVoorVierkant[1] = Arrays.bepaalWillekeurigElemntUitRij<BijvoeglijkNaamwoord>(emoties);
      } while (emotiesVoorVierkant[1] === emotiesVoorVierkant[0]);

      do {
        emotiesVoorVierkant[2] = Arrays.bepaalWillekeurigElemntUitRij<BijvoeglijkNaamwoord>(emoties);
      } while (emotiesVoorVierkant[2] === emotiesVoorVierkant[0] ||
        emotiesVoorVierkant[2] === emotiesVoorVierkant[1]
        );

      do {
        emotiesVoorVierkant[3] = Arrays.bepaalWillekeurigElemntUitRij<BijvoeglijkNaamwoord>(emoties);
      } while (emotiesVoorVierkant[3] === emotiesVoorVierkant[0] ||
      emotiesVoorVierkant[3] === emotiesVoorVierkant[1] ||
      emotiesVoorVierkant[3] === emotiesVoorVierkant[2]);

      categorie += ': ' + emotiesVoorVierkant[0].woord + ', ' + emotiesVoorVierkant[1].woord + ', ' +
        emotiesVoorVierkant[2].woord + ', ' + emotiesVoorVierkant[3].woord;
      return categorie;
    }
  }
