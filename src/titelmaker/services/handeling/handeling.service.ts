import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Arrays} from '../../util/arrays';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';
import {Locatie} from '../../models/locatie';
import {locaties} from '../../data/locaties/locaties';
import {handelingen} from '../../data/handelingen';
import {Handeling} from '../../models/handeling';

@Injectable({
  providedIn: 'root'
})
export class HandelingService {

  recenteHandelingen: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(10);

  constructor() { }

  geefWillekeurigeLocatie(): Observable<string> {
    let handeling: Handeling;
    do {
      handeling = Arrays.bepaalWillekeurigElementUitRij(handelingen.filter(l => !this.recenteHandelingen.zitWoordInLijst(l)));
      if (!handeling) {
        this.recenteHandelingen.maakLeeg();
      }
    } while (!handeling);
    this.recenteHandelingen.voegWoordToe(handeling);
    return of(handeling.infinitief);
  }
}
