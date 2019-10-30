import {Vorm} from '../enums/vorm';
import {Voorwerp} from '../models/voorwerp';
import {Locatie} from '../models/locatie';
import {Personage} from '../models/personage';
import {Koppeling} from '../models/koppeling';
import {ZelfstandigNaamwoord} from '../models/zelfstandig-naamwoord';
import {Arrays} from './arrays';
import {BijvoeglijkNaamwoord} from '../models/bijvoeglijk-naamwoord';
import {WoordSoort} from '../enums/woordsoort';
import {LidwoordSoort} from '../enums/lidwoordsoort';

export class StringMaker {

  static voorwerpAlsString(voorwerp: Voorwerp, vorm: Vorm, isLidwoordVerboden: boolean, lidwoordSoort: LidwoordSoort): string {
    let lidwoord: string;
    let voorwerpString: string;
    if (StringMaker.juisteVormBestaat(voorwerp, vorm)) {
      lidwoord = StringMaker.bepaalLidwoord(vorm, voorwerp.lidwoord, lidwoordSoort);
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

  static locatieAlsString(locatie: Locatie, onderwerp: WoordSoort): string {
    let voorzetsel: string;

    switch (onderwerp) {
      case WoordSoort.ZNW_VOORWERP:
      case WoordSoort.ZNW_BEGRIP:
        voorzetsel = Arrays.bepaalWillekeurigElementUitRij(locatie.voorzetselsVoorwerp);
        break;
      case WoordSoort.ZNW_PERSONAGE:
      case WoordSoort.ZNW_VOORNAAM_MAN:
      case WoordSoort.ZNW_VOORNAAM_VROUW:
      case WoordSoort.ZNW_NATIONALITEIT:
      case WoordSoort.ZNW_ROYALTIEFIGUUR:
      case WoordSoort.ZNW_FANTASIEFIGUUR:
      case WoordSoort.ZNW_FAMILIELID:
      case WoordSoort.ZNW_DIER:
      case WoordSoort.ZNW_BEROEP:
        voorzetsel = Arrays.bepaalWillekeurigElementUitRij(locatie.voorzetselsPersonage);
        break;
      default:
        voorzetsel = Arrays.bepaalWillekeurigElementUitRij([...locatie.voorzetselsPersonage, ...locatie.voorzetselsVoorwerp]);
    }

    return voorzetsel +
      (locatie.lidwoord !== undefined && locatie.lidwoord !== null
      && locatie.lidwoord !== '' ? ' ' + locatie.lidwoord : '') + ' ' + locatie.naam;
  }

  static personageAlsString(personage: Personage, vorm: Vorm,
                            bijvoeglijkNaamwoord: BijvoeglijkNaamwoord, lidwoordSoort: LidwoordSoort): string {
    let lidwoord: string;
    let personageString: string;
    let bijvoeglijkNaamwoordString: string;
    if (StringMaker.juisteVormBestaat(personage, vorm)) {
      lidwoord = StringMaker.bepaalLidwoord(vorm, personage.lidwoord, lidwoordSoort);
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

  static bepaalLidwoord(vorm: Vorm, enkelvoudLidwoord: string, lidwoordSoort: LidwoordSoort): string {
    let lidwoord: string;
    if (enkelvoudLidwoord) {
      switch (vorm) {
        case Vorm.MEERVOUD :
         // if (lidwoordSoort === LidwoordSoort.BEPAALD) {
            lidwoord = 'de';
        /*  } else {
            lidwoord = '';
          }*/
            break;
        case Vorm.VERKLEINWOORD :
         // if (lidwoordSoort === LidwoordSoort.BEPAALD) {
            lidwoord = 'het';
        /*  } else {
            lidwoord = 'het';
          }*/
            break;
        default:
        //  if (lidwoordSoort === LidwoordSoort.BEPAALD) {
            lidwoord = enkelvoudLidwoord;
        /*  } else {
            lidwoord = 'een';
          }*/
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
