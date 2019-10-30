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
import {LidwoordSoort} from '../../enums/lidwoordsoort';
import {TitelConfiguratieService} from './titel.configuratie.service';

@Injectable({
  providedIn: 'root'
})
export class TitelService {

  recenteLocaties: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(20);
  recenteVoorwerpen: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(20);
  recentePersonages: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(20);
  recenteBijvoeglijkNaamwoorden: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(20);

  constructor(private titelConfiguratieService: TitelConfiguratieService) {
  }

  maaktitel(): Observable<string> {
    const titelConfiguratie: TitelConfiguratie = this.titelConfiguratieService.maakWillekeurigeTitelConfiguratie();
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
      personage = this.bepaalPersonage();
      bijvoeglijkNaamwoord = this.maakBijvoeglijkNaamwoordIndienNodig(titelConfiguratie.aantalBijvoeglijkNaamwoorden);
      personageString = StringMaker.personageAlsString(personage, titelConfiguratie.vormPersonages, bijvoeglijkNaamwoord,
        titelConfiguratie.lidwoordSoort);
      if (titelConfiguratie.aantalVoorwerpen > 0) {
        voorwerpKoppeling = Arrays.bepaalWillekeurigElementUitRij<Koppeling>(voorwerpKoppelingen);
        if (voorwerpKoppeling.koppeling === 'zonder' && Randoms.maakRandomGetalTussenEnInbegrepen(1, 10) > 3) {
          voorwerpKoppeling = Arrays.bepaalWillekeurigElementUitRij<Koppeling>(voorwerpKoppelingen);
        }
        koppelingString = StringMaker.koppelingAlsString(voorwerpKoppeling);
      }
    }

    if (titelConfiguratie.aantalVoorwerpen > 0) {
      do {

        voorwerp = this.bepaalVoorwerp();
        if (!voorwerp) {
          this.recenteVoorwerpen.maakLeeg();
        }
      } while (!voorwerp);
      const isLidwoordVerboden = !voorwerpKoppeling ? false : voorwerpKoppeling.isLidwoordVerboden;
      voorwerpString =
        StringMaker.voorwerpAlsString(voorwerp, titelConfiguratie.vormVoorwerpen, isLidwoordVerboden, titelConfiguratie.lidwoordSoort);
    }

    if (titelConfiguratie.aantalLocaties > 0) {
      do {
        locatie = this.bepaalLocatie();
        if (!locatie) {
          this.recenteLocaties.maakLeeg();
        }
      } while (!locatie);
      let magBijAlsVoorzetselGebruiken = true;
      if (titelConfiguratie.aantalVoorwerpen > 0) {
        magBijAlsVoorzetselGebruiken = false;
      }
      const onderwerp: WoordSoort = this.bepaalOnderwerp(titelConfiguratie);
      locatieString = StringMaker.locatieAlsString(locatie, onderwerp);
    }

    let titel = this.combineerTotTitel(personageString, koppelingString, voorwerpString, locatieString);
    titel = this.maakFallbacktitelIndienTitelGenererenMisluktIs(titel);

    this.updateRecenteWoorden(locatie, personage, bijvoeglijkNaamwoord, voorwerp);

    return of(titel);
  }

  private bepaalLocatie() {
    return Arrays.bepaalWillekeurigElementUitRij<Locatie>(locaties
      .filter(l => !this.recenteLocaties.zitWoordInLijst(l))
    );
  }

  private bepaalVoorwerp() {
    return Arrays.bepaalWillekeurigElementUitRij<Voorwerp>(voorwerpen
      .filter(v => !this.recenteVoorwerpen.zitWoordInLijst(v)));
  }

  private maakFallbacktitelIndienTitelGenererenMisluktIs(titel) {
    if (!titel || titel === '') {
      titel = 'De luie man in het witte huis';
    }
    return titel;
  }

  private combineerTotTitel(personageString: string, koppelingString: string, voorwerpString: string, locatieString: string) {
    return Strings.maakHoofdletterVanEersteLetter((personageString ? personageString : '') +
      (personageString && koppelingString ? ' ' : '') +
      (koppelingString ? koppelingString : '') +
      (koppelingString && voorwerpString ? ' ' : '') +
      (voorwerpString ? voorwerpString : '') +
      ((voorwerpString && locatieString) || (personageString && locatieString) ? ' ' : '') +
      (locatieString ? locatieString : ''));
  }

  private bepaalPersonage() {
    let personage: Personage;
    do {
      personage = Arrays.bepaalWillekeurigElementUitRij<Personage>(personages
        .filter(p => !this.recentePersonages.zitWoordInLijst(p))
      );
      if (!personage) {
        this.recentePersonages.maakLeeg();
      }
    } while (!personage);
    return personage;
  }

  private maakBijvoeglijkNaamwoordIndienNodig(aantalBijvoeglijkNaamwoorden) {
    let bijvoeglijkNaamwoord: BijvoeglijkNaamwoord;
    if (aantalBijvoeglijkNaamwoorden > 0) {
      do {
        bijvoeglijkNaamwoord = this.bepaalBijvoeglijkNaamwoord();
        this.maakRecenteBijvoeglijkNaamwoordenLeegIndienErGeenOptiesMeerZijn(bijvoeglijkNaamwoord);
      } while (!bijvoeglijkNaamwoord);
    }
    return bijvoeglijkNaamwoord;
  }

  private maakRecenteBijvoeglijkNaamwoordenLeegIndienErGeenOptiesMeerZijn(bijvoeglijkNaamwoord: BijvoeglijkNaamwoord) {
    if (!bijvoeglijkNaamwoord) {
      this.recenteBijvoeglijkNaamwoorden.maakLeeg();
    }
  }

  private bepaalBijvoeglijkNaamwoord() {
    return Arrays.bepaalWillekeurigElementUitRij<BijvoeglijkNaamwoord>(
      this.bepaalMogelijkeBijvoeglijkNaamwoorden()
    );
  }

  private bepaalMogelijkeBijvoeglijkNaamwoorden() {
    return this.getBijvoeglijkNaamwoordenDieOpPersonagesToepasbaarZijn()
      .filter(b => !this.recenteBijvoeglijkNaamwoorden.zitWoordInLijst(b));
  }

  private getBijvoeglijkNaamwoordenDieOpPersonagesToepasbaarZijn() {
    return bijvoeglijkNaamwoorden.filter((b) => b.toepasbaarOp.filter((t) =>
      t === WoordSoort.ZNW_PERSONAGE).length >= 1);
  }

  private updateRecenteWoorden(locatie: Locatie, personage: Personage, bijvoeglijkNaamwoord: BijvoeglijkNaamwoord, voorwerp: Voorwerp) {
    this.recenteLocaties.voegWoordToe(locatie);
    this.recenteVoorwerpen.voegWoordToe(voorwerp);
    this.recentePersonages.voegWoordToe(personage);
    this.recenteBijvoeglijkNaamwoorden.voegWoordToe(bijvoeglijkNaamwoord);
  }

  private bepaalOnderwerp(titelConfiguratie: TitelConfiguratie): WoordSoort {
    if (titelConfiguratie.aantalPersonages > 1) {
      return WoordSoort.ZNW_PERSONAGE;
    } else {
      return WoordSoort.ZNW_VOORWERP;
    }
  }
}
