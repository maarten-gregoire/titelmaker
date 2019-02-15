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

@Injectable({
  providedIn: 'root'
})
export class WoordService {

  constructor() { }

  geefWillekeurigWoord(): Observable<string> {
    return of(Arrays.bepaalWillekeurigElemntUitRij([...locaties, ...voorwerpen, ...personages]).naam);
  }
}
