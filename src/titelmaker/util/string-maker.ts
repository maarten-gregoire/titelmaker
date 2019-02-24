import {Vorm} from '../enums/vorm';
import {Voorwerp} from '../models/voorwerp';
import {Locatie} from '../models/locatie';
import {Personage} from '../models/personage';
import {Koppeling} from '../models/koppeling';
import {ZelfstandigNaamwoord} from '../models/zelfstandig-naamwoord';
import {Randoms} from './randoms';
import {Arrays} from './arrays';
import {BijvoeglijkNaamwoord} from '../models/bijvoeglijk-naamwoord';

export class StringMaker {

  static voorwerpAlsString(voorwerp: Voorwerp, vorm: Vorm, isLidwoordVerboden: boolean): string {
    let lidwoord: string;
    let voorwerpString: string;
    if (StringMaker.juisteVormBestaat(voorwerp, vorm)) {
      lidwoord = StringMaker.bepaalLidwoord(vorm, voorwerp.lidwoord);
      voorwerpString = StringMaker.bepaalZelfstandigNaamwoordInJuisteVorm(vorm, voorwerp);
    } else {
      lidwoord = voorwerp.lidwoord;
      voorwerpString = voorwerp.naam;
    }
    if (isLidwoordVerboden) {
      lidwoord = null;
    }
    return (lidwoord ? lidwoord + ' ' : '') + voorwerpString;
  }

  static locatieAlsString(locatie: Locatie, magBijAlsVoorzetselGebruiken: boolean): string {
    let voorzetsel: string = Arrays.bepaalWillekeurigElementUitRij(locatie.voorzetsels);

    if (!magBijAlsVoorzetselGebruiken) {
      while (voorzetsel === 'bij') {
        voorzetsel = Arrays.bepaalWillekeurigElementUitRij(locatie.voorzetsels);
      }
    }
    return voorzetsel +
      (locatie.lidwoord !== undefined && locatie.lidwoord !== null
      && locatie.lidwoord !== '' ? ' ' + locatie.lidwoord : '') + ' ' + locatie.naam;
  }

  static personageAlsString(personage: Personage, vorm: Vorm, bijvoeglijkNaamwoord: BijvoeglijkNaamwoord): string {
    let lidwoord: string;
    let personageString: string;
    let bijvoeglijkNaamwoordString: string;
    if (StringMaker.juisteVormBestaat(personage, vorm)) {
      lidwoord = StringMaker.bepaalLidwoord(vorm, personage.lidwoord);
      personageString = StringMaker.bepaalZelfstandigNaamwoordInJuisteVorm(vorm, personage);

    } else {
      lidwoord = personage.lidwoord;
      personageString = personage.naam;
    }

    if (bijvoeglijkNaamwoord && lidwoord) {
      bijvoeglijkNaamwoordString = bijvoeglijkNaamwoord.tweedeVorm;
    }

    return (lidwoord ? lidwoord + ' ' : '') +
      (bijvoeglijkNaamwoordString ? bijvoeglijkNaamwoordString + ' ' : '') +
      personageString;
  }

  static juisteVormBestaat(zelfstandigNaamwoord: ZelfstandigNaamwoord, vorm: Vorm): boolean {
    if (vorm === Vorm.MEERVOUD && !zelfstandigNaamwoord.meervoud) { return false; }
    if (vorm === Vorm.VERKLEINWOORD && !zelfstandigNaamwoord.verkleinwoord) { return false; }
    return true;
  }

  static koppelingAlsString(koppeling: Koppeling): string {
    return koppeling.koppeling;
  }

  static bepaalLidwoord(vorm: Vorm, enkelvoudLidwoord: string): string {
    let lidwoord: string;
    if (enkelvoudLidwoord) {
      switch (vorm) {
        case Vorm.MEERVOUD :
          lidwoord = 'de';
          break;
        case Vorm.VERKLEINWOORD :
          lidwoord = 'het';
          break;
        default:
          lidwoord = enkelvoudLidwoord;
      }
    }
    return lidwoord;
  }

  private static bepaalZelfstandigNaamwoordInJuisteVorm(vorm: Vorm, zelfstandigNaamwoord: ZelfstandigNaamwoord) {
    if (vorm === Vorm.MEERVOUD) { return zelfstandigNaamwoord.meervoud; }
    if (vorm === Vorm.VERKLEINWOORD) { return zelfstandigNaamwoord.verkleinwoord; }
    return zelfstandigNaamwoord.naam;
  }

}
