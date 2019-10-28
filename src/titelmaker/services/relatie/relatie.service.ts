import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Arrays} from '../../util/arrays';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';
import {Locatie} from '../../models/locatie';
import {locaties} from '../../data/locaties/locaties';
import {handelingen} from '../../data/handelingen';
import {Handeling} from '../../models/handeling';
import {Relatie} from '../../models/relatie';
import {relaties} from '../../data/relaties/relaties';

@Injectable({
  providedIn: 'root'
})
export class RelatieService {

  recenteRelaties: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(10);

  constructor() { }

  geefWillekeurigeRelatie(): Observable<string> {
    let relatie: Relatie;
    do {
      relatie = Arrays.bepaalWillekeurigElementUitRij(relaties.filter(l => !this.recenteRelaties.zitWoordInLijst(l)));
      if (!relatie) {
        this.recenteRelaties.maakLeeg();
      }
    } while (!relatie);
    this.recenteRelaties.voegWoordToe(relatie);
    return of(relatie.personage1 + ' en ' + relatie.personage2);
  }
}
