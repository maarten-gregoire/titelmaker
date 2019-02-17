import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {voorwerpen} from '../../data/voorwerpen/voorwerpen';
import {Arrays} from '../../util/arrays';
import {Voorwerp} from '../../models/voorwerp';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';

@Injectable({
  providedIn: 'root'
})
export class VoorwerpService {

  recenteVoorwerpen: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(30);

  constructor() { }

  geefWillekeurigVoorwerp(): Observable<string> {
    let voorwerp: Voorwerp;
    do {
    voorwerp = Arrays.bepaalWillekeurigElemntUitRij(voorwerpen.filter(v => !this.recenteVoorwerpen.zitWoordInLijst(v)));
    if (!voorwerp) {
      this.recenteVoorwerpen.maakLeeg();
    }
    } while (!voorwerp);
    this.recenteVoorwerpen.voegWoordToe(voorwerp);
    return of(voorwerp.naam);
  }
}
