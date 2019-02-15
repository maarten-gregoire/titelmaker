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
export class TitelService {

  constructor() { }

  maaktitel(): Observable<string> {
    const titelConfiguratie: TitelConfiguratie = this.maakWillekeurigeTitelConfiguratie();
    let personageString: string;
    let koppelingString: string;
    let voorwerpString: string;
    let locatieString: string;
    let voorwerpKoppeling: Koppeling;
    if (titelConfiguratie.aantalPersonages > 0) {
      const personage: Personage = Arrays.bepaalWillekeurigElemntUitRij<Personage>(personages);
      let bijvoeglijkNaamwoord: BijvoeglijkNaamwoord;
      if (titelConfiguratie.aantalBijvoeglijkNaamwoorden > 0) {
          bijvoeglijkNaamwoord =
            Arrays.bepaalWillekeurigElemntUitRij<BijvoeglijkNaamwoord>(
              bijvoeglijkNaamwoorden.filter((b) => b.toepasbaarOp.filter((t) =>
                t === WoordSoort.ZNW_PERSONAGE).length >= 1));
        }
      personageString = StringMaker.personageAlsString(personage, titelConfiguratie.vormPersonages, bijvoeglijkNaamwoord);
      if (titelConfiguratie.aantalVoorwerpen > 0) {
        voorwerpKoppeling = Arrays.bepaalWillekeurigElemntUitRij<Koppeling>(voorwerpKoppelingen);
        if (voorwerpKoppeling.koppeling === 'zonder' && Randoms.maakRandomGetalTussenEnInbegrepen(1, 10) > 3) {
          voorwerpKoppeling = Arrays.bepaalWillekeurigElemntUitRij<Koppeling>(voorwerpKoppelingen);
        }
        koppelingString = StringMaker.koppelingAlsString(voorwerpKoppeling);
      }
    }

    if (titelConfiguratie.aantalVoorwerpen > 0) {
      const voorwerp: Voorwerp = Arrays.bepaalWillekeurigElemntUitRij<Voorwerp>(voorwerpen);
      const isLidwoordVerboden = !voorwerpKoppeling ? false : voorwerpKoppeling.isLidwoordVerboden;
      voorwerpString = StringMaker.voorwerpAlsString(voorwerp, titelConfiguratie.vormVoorwerpen, isLidwoordVerboden);
    }
    if (titelConfiguratie.aantalLocaties > 0) {
      const locatie: Locatie = Arrays.bepaalWillekeurigElemntUitRij<Locatie>(locaties);
      let magBijAlsVoorzetselGebruiken = true;
      if (titelConfiguratie.aantalVoorwerpen > 0) {
        magBijAlsVoorzetselGebruiken = false;
      }
      locatieString = StringMaker.locatieAlsString(locatie, magBijAlsVoorzetselGebruiken);
    }

    const titel = (personageString ? personageString : '') +
      (personageString && koppelingString ? ' ' : '') +
      (koppelingString ? koppelingString : '') +
      (koppelingString && voorwerpString ? ' ' : '') +
      (voorwerpString ? voorwerpString : '') +
      ((voorwerpString && locatieString) || (personageString && locatieString) ? ' ' : '') +
      (locatieString ? locatieString : '');
    return of(Strings.maakHoofdletterVanEersteLetter(titel));
  }

  maakWillekeurigeTitelConfiguratie() {
    const configuratie: TitelConfiguratie = {
      aantalBijvoeglijkNaamwoorden: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      aantalPersonages: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      aantalVoorwerpen: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      aantalLocaties: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      vormPersonages: Randoms.bepaalRandomEnumValue(Vorm),
      vormVoorwerpen: Randoms.bepaalRandomEnumValue(Vorm),
      vormLocaties: Randoms.bepaalRandomEnumValue(Vorm)
    };

    if (configuratie.aantalPersonages + configuratie.aantalVoorwerpen + configuratie.aantalLocaties < 2) {
      for (let i = 0; i < 2; i++) {
        switch (Randoms.maakRandomGetalTussenEnInbegrepen(1, 3)) {
          case 1:
            configuratie.aantalLocaties = 1;
            break;
          case 2:
            configuratie.aantalVoorwerpen = 1;
            break;
          case 3:
            configuratie.aantalPersonages = 1;
            break;
          default:
            configuratie.aantalVoorwerpen = 1;
        }
      }
    }

    return configuratie;
  }

}
