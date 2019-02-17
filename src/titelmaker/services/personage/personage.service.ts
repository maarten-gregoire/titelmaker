import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {voorwerpen} from '../../data/voorwerpen/voorwerpen';
import {Arrays} from '../../util/arrays';
import {Voorwerp} from '../../models/voorwerp';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';
import {Personage} from '../../models/personage';
import {personages} from '../../data/personages/personages';
import {beroepen} from '../../data/personages/beroepen';
import {dieren} from '../../data/personages/dieren';

@Injectable({
  providedIn: 'root'
})
export class PersonageService {

  recentePersonages: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(30);
  recenteBeroepen: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(10);
  recenteDieren: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(10);

  constructor() { }

  geefWillekeurigPersonage(): Observable<string> {
    let personage: Personage;
    do {
    personage = Arrays.bepaalWillekeurigElemntUitRij(personages.filter(p => !this.recentePersonages.zitWoordInLijst(p)));
    if (!personage) {
      this.recentePersonages.maakLeeg();
    }
    } while (!personage);
    this.recentePersonages.voegWoordToe(personage);
    return of(personage.naam);
  }

  geefWillekeurigBeroep(): Observable<string> {
    let beroep: Personage;
    do {
      beroep = Arrays.bepaalWillekeurigElemntUitRij(beroepen.filter(p => !this.recenteBeroepen.zitWoordInLijst(p)));
      if (!beroep) {
        this.recenteBeroepen.maakLeeg();
      }
    } while (!beroep);
    this.recenteBeroepen.voegWoordToe(beroep);
    return of(beroep.naam);
  }

  geefWillekeurigDier(): Observable<string> {
    let dier: Personage;
    do {
      dier = Arrays.bepaalWillekeurigElemntUitRij(dieren.filter(p => !this.recenteDieren.zitWoordInLijst(p)));
      if (!dier) {
        this.recenteDieren.maakLeeg();
      }
    } while (!dier);
    this.recenteDieren.voegWoordToe(dier);
    return of(dier.naam);
  }
}
