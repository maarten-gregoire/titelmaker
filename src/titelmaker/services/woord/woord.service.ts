import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {locaties} from '../../data/locaties/locaties';
import {voorwerpen} from '../../data/voorwerpen/voorwerpen';
import {StringMaker} from '../../util/string-maker';
import {Arrays} from '../../util/arrays';
import {Strings} from '../../util/strings';
import {Randoms} from '../../util/randoms';
import {personages} from '../../data/personages/personages';
import {voorwerpKoppelingen} from '../../data/koppelingen';
import {TitelConfiguratie} from '../../configuraties/titelConfiguratie';
import {Vorm} from '../../enums/vorm';
import {Personage} from '../../models/personage';
import {Koppeling} from '../../models/koppeling';
import {Voorwerp} from '../../models/voorwerp';
import {Locatie} from '../../models/locatie';
import {BijvoeglijkNaamwoord} from '../../models/bijvoeglijk-naamwoord';
import {bijvoeglijkNaamwoorden} from '../../data/bijvoeglijk-naamwoorden/bijvoeglijk-naamwoorden';
import {WoordSoort} from '../../enums/woordsoort';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';
import {Woord} from '../../models/woord';
import {ZelfstandigNaamwoord} from '../../models/zelfstandig-naamwoord';

@Injectable({
  providedIn: 'root'
})
export class WoordService {

  recenteWoorden: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(100);

  constructor() { }

  geefWillekeurigWoord(): Observable<string> {
    let woord: ZelfstandigNaamwoord;
    do {
    woord = Arrays.bepaalWillekeurigElemntUitRij([...locaties, ...voorwerpen, ...personages]
      .filter(w => !this.recenteWoorden.zitWoordInLijst(w)));
    if (!woord) {
      this.recenteWoorden.maakLeeg();
    }
    } while (!woord);
    this.recenteWoorden.voegWoordToe(woord);
    return of(woord.naam);
  }
}
