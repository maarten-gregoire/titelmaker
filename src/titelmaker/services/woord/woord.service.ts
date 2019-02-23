import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {locaties} from '../../data/locaties/locaties';
import {voorwerpen} from '../../data/voorwerpen/voorwerpen';
import {Arrays} from '../../util/arrays';
import {personages} from '../../data/personages/personages';
import {WoordSoort} from '../../enums/woordsoort';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';
import {ZelfstandigNaamwoord} from '../../models/zelfstandig-naamwoord';
import {Personage} from '../../models/personage';

@Injectable({
  providedIn: 'root'
})
export class WoordService {

  recenteWoorden: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(100);

  constructor() { }

  geefWillekeurigWoord(): Observable<string> {
    let woord: ZelfstandigNaamwoord;
    do {
      woord = Arrays.bepaalWillekeurigElemntUitRij([...locaties, ...voorwerpen, ...personages.filter(p =>
        this.isGeenVoornaam(p))]
      .filter(w => !this.recenteWoorden.zitWoordInLijst(w)));
      if (!woord) {
      this.recenteWoorden.maakLeeg();
    }
    } while (!woord);
    this.recenteWoorden.voegWoordToe(woord);
    return of(woord.naam);
  }

  private isGeenVoornaam(p): boolean {
    return (p.woordsoorten.filter(ws => this.isVoornaam(ws))).length < 1;
  }

  private isVoornaam(ws) {
    return this.isMannenVoornaam(ws) || this.isVrouwenVoornaam(ws);
  }

  private isVrouwenVoornaam(ws) {
    return ws === WoordSoort.ZNW_VOORNAAM_VROUW;
  }

  private isMannenVoornaam(ws) {
    return ws === WoordSoort.ZNW_VOORNAAM_MAN;
  }
}
