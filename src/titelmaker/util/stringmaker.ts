import {Vorm} from '../models/vorm';

export class StringMaker {

  static voorwerpAlsString(voorwerp: Voorwerp): string {
    return (voorwerp.lidwoord ? voorwerp.lidwoord + ' ' : '') + voorwerp.naam;
  }

  static locatieAlsString(locatie: Locatie): string {
    return locatie.voorzetsels[Math.floor(Math.random() * locatie.voorzetsels.length)] +
      (locatie.lidwoord !== undefined && locatie.lidwoord !== null
      && locatie.lidwoord !== '' ? ' ' + locatie.lidwoord : '') + ' ' + locatie.naam;
  }

  static personageAlsString(personage: Personage, vorm: Vorm): string {
    let lidwoord: string;
    let personageString: string;
    if (StringMaker.juisteVormBestaat(personage, vorm)) {
      lidwoord = StringMaker.bepaalLidwoord(vorm, personage.lidwoord);
      personageString = StringMaker.bepaalPersonageInJuisteVorm(vorm, personage);

    } else {
      lidwoord = personage.lidwoord;
      personageString = personage.naam;
    }

    return (lidwoord ? lidwoord + ' ' : '') + personageString;
  }

  static juisteVormBestaat(personage: Personage, vorm: Vorm): boolean {
    if (vorm === Vorm.MEERVOUD && !personage.meervoud) { return false; }
    if (vorm === Vorm.VERKLEINWOORD && !personage.verkleinwoord) { return false; }
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
}
