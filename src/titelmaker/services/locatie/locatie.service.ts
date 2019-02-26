import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Arrays} from '../../util/arrays';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';
import {Locatie} from '../../models/locatie';
import {locaties} from '../../data/locaties/locaties';
import {StringMaker} from '../../util/string-maker';
import {WoordSoort} from '../../enums/woordsoort';

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
    return of(StringMaker.locatieAlsString(locatie, WoordSoort.ZNW_LOCATIE));
  }
}
