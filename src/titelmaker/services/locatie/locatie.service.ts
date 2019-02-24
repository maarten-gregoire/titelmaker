import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {voorwerpen} from '../../data/voorwerpen/voorwerpen';
import {Arrays} from '../../util/arrays';
import {Voorwerp} from '../../models/voorwerp';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';
import {Personage} from '../../models/personage';
import {personages} from '../../data/personages/personages';
import {Locatie} from '../../models/locatie';
import {locaties} from '../../data/locaties/locaties';
import {StringMaker} from '../../util/string-maker';

@Injectable({
  providedIn: 'root'
})
export class LocatieService {

  recenteLocaties: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(30);

  constructor() { }

  geefWillekeurigeLocatie(): Observable<string> {
    let locatie: Locatie;
    do {
      locatie = Arrays.bepaalWillekeurigElementUitRij(locaties.filter(l => !this.recenteLocaties.zitWoordInLijst(l)));
      if (!locatie) {
        this.recenteLocaties.maakLeeg();
      }
    } while (!locatie);
    this.recenteLocaties.voegWoordToe(locatie);
    return of(StringMaker.locatieAlsString(locatie, true));
  }
}
