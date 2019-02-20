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
import {beroepen} from '../../data/personages/beroepen';

@Injectable({
  providedIn: 'root'
})
export class TitelService {

  recenteLocaties: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(20);
  recenteVoorwerpen: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(20);
  recentePersonages: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(20);
  recenteBijvoeglijkNaamwoorden: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(20);

  constructor() { }

  maaktitel(): Observable<string> {
    const titelConfiguratie: TitelConfiguratie = this.maakWillekeurigeTitelConfiguratie();
    let personageString: string;
    let koppelingString: string;
    let voorwerpString: string;
    let locatieString: string;
    let personage: Personage;
    let bijvoeglijkNaamwoord: BijvoeglijkNaamwoord;
    let voorwerp: Voorwerp;
    let locatie: Locatie;
    let voorwerpKoppeling: Koppeling;
    if (titelConfiguratie.aantalPersonages > 0) {
      personage = Arrays.bepaalWillekeurigElemntUitRij<Personage>(personages
        .filter(p => !this.recentePersonages.zitWoordInLijst(p))
      );
      if (!personage) {
        this.recentePersonages.maakLeeg();
      }
      if (titelConfiguratie.aantalBijvoeglijkNaamwoorden > 0) {
        bijvoeglijkNaamwoord =
          Arrays.bepaalWillekeurigElemntUitRij<BijvoeglijkNaamwoord>(
            bijvoeglijkNaamwoorden.filter((b) => b.toepasbaarOp.filter((t) =>
              t === WoordSoort.ZNW_PERSONAGE).length >= 1)
              .filter(b => !this.recenteBijvoeglijkNaamwoorden.zitWoordInLijst(b))
          );
        if (!bijvoeglijkNaamwoord) {
          this.recenteBijvoeglijkNaamwoorden.maakLeeg();
        }
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
      voorwerp = Arrays.bepaalWillekeurigElemntUitRij<Voorwerp>(voorwerpen
        .filter(v => !this.recenteVoorwerpen.zitWoordInLijst(v)));
      if (!voorwerp) {
        this.recenteVoorwerpen.maakLeeg();
      }
      const isLidwoordVerboden = !voorwerpKoppeling ? false : voorwerpKoppeling.isLidwoordVerboden;
      voorwerpString = StringMaker.voorwerpAlsString(voorwerp, titelConfiguratie.vormVoorwerpen, isLidwoordVerboden);
    }
    let magBijAlsVoorzetselGebruiken = true;
    if (titelConfiguratie.aantalVoorwerpen > 0) {
      magBijAlsVoorzetselGebruiken = false;
    }
    if (Randoms.maakRandomGetalTussenEnInbegrepen(0, 10) >= 1) {
      if (titelConfiguratie.aantalLocaties > 1 || !magBijAlsVoorzetselGebruiken) {
        locatie = Arrays.bepaalWillekeurigElemntUitRij<Locatie>(locaties
          .filter(l => !this.recenteLocaties.zitWoordInLijst(l))
        );
        if (!locatie) {
          this.recenteLocaties.maakLeeg();
        }
      } else {
        const beroep: Personage = Arrays.bepaalWillekeurigElemntUitRij(beroepen.filter(b => !this.recentePersonages.zitWoordInLijst(b)));
        locatie = {

          naam: beroep.naam,
          lidwoord: beroep.lidwoord,
          voorzetsels: ['bij'],
          meervoud: beroep.meervoud,
          verkleinwoord: beroep.verkleinwoord,
          woordsoorten: beroep.woordsoorten

        };
      }

      locatieString = StringMaker.locatieAlsString(locatie, magBijAlsVoorzetselGebruiken);
    }

    this.updateRecenteWoorden(locatie, personage, bijvoeglijkNaamwoord, voorwerp);

    const titel = (personageString ? personageString : '') +
      (personageString && koppelingString ? ' ' : '') +
      (koppelingString ? koppelingString : '') +
      (koppelingString && voorwerpString ? ' ' : '') +
      (voorwerpString ? voorwerpString : '') +
      ((voorwerpString && locatieString) || (personageString && locatieString) ? ' ' : '') +
      (locatieString ? locatieString : '');
    if (!titel || titel === '') {
      return of('Er gaat iets mis');
    }
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

  private updateRecenteWoorden(locatie: Locatie, personage: Personage, bijvoeglijkNaamwoord: BijvoeglijkNaamwoord, voorwerp: Voorwerp) {
    this.recenteLocaties.voegWoordToe(locatie);
    this.recenteVoorwerpen.voegWoordToe(voorwerp);
    this.recentePersonages.voegWoordToe(personage);
    this.recenteBijvoeglijkNaamwoorden.voegWoordToe(bijvoeglijkNaamwoord);
  }
}
