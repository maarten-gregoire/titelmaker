import {Vorm} from '../enums/vorm';
import {Voorwerp} from '../models/voorwerp';
import {Locatie} from '../models/locatie';
import {Personage} from '../models/personage';
import {Koppeling} from '../models/koppeling';

export class StringMaker {

  static voorwerpAlsString(voorwerp: Voorwerp, vorm: Vorm): string {
    let lidwoord: string;
    let voorwerpString: string;
    if (StringMaker.juisteVormBestaatInVoorwerp(voorwerp, vorm)) {
      lidwoord = StringMaker.bepaalLidwoord(vorm, voorwerp.lidwoord);
      voorwerpString = StringMaker.bepaalVoorwerpInJuisteVorm(vorm, voorwerp);
    } else {
      lidwoord = voorwerp.lidwoord;
      voorwerpString = voorwerp.naam;
    }
    return (lidwoord ? lidwoord + ' ' : '') + voorwerpString;
  }

  static locatieAlsString(locatie: Locatie): string {
    return locatie.voorzetsels[Math.floor(Math.random() * locatie.voorzetsels.length)] +
      (locatie.lidwoord !== undefined && locatie.lidwoord !== null
      && locatie.lidwoord !== '' ? ' ' + locatie.lidwoord : '') + ' ' + locatie.naam;
  }

  static personageAlsString(personage: Personage, vorm: Vorm): string {
    let lidwoord: string;
    let personageString: string;
    if (StringMaker.juisteVormBestaatInPersonage(personage, vorm)) {
      lidwoord = StringMaker.bepaalLidwoord(vorm, personage.lidwoord);
      personageString = StringMaker.bepaalPersonageInJuisteVorm(vorm, personage);

    } else {
      lidwoord = personage.lidwoord;
      personageString = personage.naam;
    }

    return (lidwoord ? lidwoord + ' ' : '') + personageString;
  }

  static juisteVormBestaatInPersonage(personage: Personage, vorm: Vorm): boolean {
    if (vorm === Vorm.MEERVOUD && !personage.meervoud) { return false; }
    if (vorm === Vorm.VERKLEINWOORD && !personage.verkleinwoord) { return false; }
    return true;
  }

  static juisteVormBestaatInVoorwerp(voorwerp: Voorwerp, vorm: Vorm): boolean {
    if (vorm === Vorm.MEERVOUD && !voorwerp.meervoud) { return false; }
    if (vorm === Vorm.VERKLEINWOORD && !voorwerp.verkleinwoord) { return false; }
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

  private static bepaalPersonageInJuisteVorm(vorm: Vorm, personage: Personage) {
    if (vorm === Vorm.MEERVOUD) { return personage.meervoud; }
    if (vorm === Vorm.VERKLEINWOORD) { return personage.verkleinwoord; }
    return personage.naam;
  }

  private static bepaalVoorwerpInJuisteVorm(vorm: Vorm, voorwerp: Voorwerp) {
    if (vorm === Vorm.MEERVOUD) { return voorwerp.meervoud; }
    if (vorm === Vorm.VERKLEINWOORD) { return voorwerp.verkleinwoord; }
    return voorwerp.naam;
  }
}
