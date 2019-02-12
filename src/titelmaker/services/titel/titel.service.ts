import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {locaties} from '../../data/locaties';
import {voorwerpen} from '../../data/voorwerpen';
import {StringMaker} from '../../util/string-maker';
import {Arrays} from '../../util/arrays';
import {Strings} from '../../util/strings';
import {Randoms} from '../../util/randoms';
import {personages} from '../../data/personages';
import {personageKoppelingen, voorwerpKoppelingen} from '../../data/koppelingen';
import {TitelConfiguratie} from '../../configuraties/titelConfiguratie';
import {Vorm} from '../../enums/vorm';
import {Personage} from '../../models/personage';
import {Koppeling} from '../../models/koppeling';
import {Voorwerp} from '../../models/voorwerp';
import {Locatie} from '../../models/locatie';

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
    if (titelConfiguratie.aantalPersonages > 0) {
      const personage: Personage = Arrays.bepaalWillekeurigElemntUitRij<Personage>(personages);
      personageString = StringMaker.personageAlsString(personage, titelConfiguratie.vormPersonages);
      if (titelConfiguratie.aantalVoorwerpen > 0) {
        const voorwerpKoppeling: Koppeling = Arrays.bepaalWillekeurigElemntUitRij<Koppeling>(voorwerpKoppelingen);
        koppelingString = StringMaker.koppelingAlsString(voorwerpKoppeling);
      }
    }

    if (titelConfiguratie.aantalVoorwerpen > 0) {
      const voorwerp: Voorwerp = Arrays.bepaalWillekeurigElemntUitRij<Voorwerp>(voorwerpen);
      voorwerpString = StringMaker.voorwerpAlsString(voorwerp, titelConfiguratie.vormVoorwerpen);
    }
    if (titelConfiguratie.aantalLocaties > 0) {
      const locatie: Locatie = Arrays.bepaalWillekeurigElemntUitRij<Locatie>(locaties);
      locatieString = StringMaker.locatieAlsString(locatie);
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
    const ordernummerPersonages: number = Randoms.maakRandomGetalTussenEnInbegrepen(1, 3);
    const ordernummerVoorwerpen = Randoms.maakRandomGetalTussenEnInbegrepenVerschillendVan(
      1, 2, [ordernummerPersonages]);
    const ordernummerLocaties = Randoms.maakRandomGetalTussenEnInbegrepenVerschillendVan(
      1, 2, [ordernummerPersonages, ordernummerVoorwerpen]);
    const configuratie = {
      aantalPersonages: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      aantalVoorwerpen: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      aantalLocaties: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      ordernummerPersonages,
      ordernummerVoorwerpen,
      ordernummerLocaties: Randoms.maakRandomGetalTussenEnInbegrepen(1, 1),
      vormPersonages: Randoms.bepaalRandomEnumValue(Vorm),
      vormVoorwerpen: Randoms.bepaalRandomEnumValue(Vorm),
      vormLocaties: Randoms.bepaalRandomEnumValue(Vorm)
    };

    if (configuratie.aantalPersonages + configuratie.aantalVoorwerpen + configuratie.aantalLocaties < 1) {
      switch (Randoms.maakRandomGetalTussenEnInbegrepen(1, 3)) {
        case 1: configuratie.aantalLocaties = 1; break;
        case 2: configuratie.aantalVoorwerpen = 1; break;
        case 3: configuratie.aantalPersonages = 1; break;
        default: configuratie.aantalVoorwerpen = 1;
      }
    }

    if (configuratie.aantalPersonages + configuratie.aantalVoorwerpen + configuratie.aantalLocaties < 2) {
      switch (Randoms.maakRandomGetalTussenEnInbegrepen(1, 3)) {
        case 1: configuratie.aantalLocaties = 1; break;
        case 2: configuratie.aantalVoorwerpen = 1; break;
        case 3: configuratie.aantalPersonages = 1; break;
        default: configuratie.aantalVoorwerpen = 1;
      }
    }

    return configuratie;
  }

}
