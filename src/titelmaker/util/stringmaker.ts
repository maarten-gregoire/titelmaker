export class StringMaker {

  static voorwerpAlsString(voorwerp: Voorwerp): string {
    return (voorwerp.lidwoord ? voorwerp.lidwoord + ' ' : '') + voorwerp.naam;
  }

  static locatieAlsString(locatie: Locatie): string {
    return locatie.voorzetsels[Math.floor(Math.random() * locatie.voorzetsels.length)] +
      (locatie.lidwoord !== undefined && locatie.lidwoord !== null
      && locatie.lidwoord !== '' ? ' ' + locatie.lidwoord : '') + ' ' + locatie.naam;
  }

  static personageAlsString(personage: Personage): string {
    return (personage.lidwoord ? personage.lidwoord + ' ' : '') + personage.naam;
  }

  static koppelingAlsString(koppeling: Koppeling): string {
    return koppeling.koppeling;
  }
}
