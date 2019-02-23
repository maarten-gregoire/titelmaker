import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {locaties} from '../../data/locaties/locaties';
import {voorwerpen} from '../../data/voorwerpen/voorwerpen';
import {Arrays} from '../../util/arrays';
import {personages} from '../../data/personages/personages';
import {WoordSoort} from '../../enums/woordsoort';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';
import {ZelfstandigNaamwoord} from '../../models/zelfstandig-naamwoord';
import {Personage} from '../../models/personage';
import {Randoms} from '../../util/randoms';

@Injectable({
  providedIn: 'root'
})
export class WoordService {

  recenteWoorden: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(100);
  woordenLijst = [...locaties, ...voorwerpen, ...personages];

  set = new Set(
    [...this.woordenLijst.map(w => w.naam),
      ...this.woordenLijst.map(w => w.verkleinwoord),
      ...this.woordenLijst.map(w => w.meervoud)].filter(w => w));
  woordStrings: string[] = Array.from(this.set);

  constructor() { }

  geefWillekeurigWoord(): Observable<string> {
    let woord: ZelfstandigNaamwoord;
    do {
      woord = Arrays.bepaalWillekeurigElemntUitRij([...locaties, ...voorwerpen, ...personages.filter(p =>
        this.isGeenVoornaam(p))]
      .filter(w => !this.recenteWoorden.zitWoordInLijst(w)));
      if (!woord) {
      this.recenteWoorden.maakLeeg();
    }
    } while (!woord);
    this.recenteWoorden.voegWoordToe(woord);
    return of(woord.naam);
  }

  geefOnbestaandWoord(): Observable<string> {
    return of(this.maakOnbestaandWoord());
  }

  private isGeenVoornaam(p): boolean {
    return (p.woordsoorten.filter(ws => this.isVoornaam(ws))).length < 1;
  }

  private isVoornaam(ws) {
    return this.isMannenVoornaam(ws) || this.isVrouwenVoornaam(ws);
  }

  private isVrouwenVoornaam(ws) {
    return ws === WoordSoort.ZNW_VOORNAAM_VROUW;
  }

  private isMannenVoornaam(ws) {
    return ws === WoordSoort.ZNW_VOORNAAM_MAN;
  }

  private maakOnbestaandWoord(): string {
    const mogelijkeWoordStarters: string[] = this.bepaalWoordStarters();
    const mogelijkeWoordEindes: string[] = this.bepaalWoordEindes();
    const mogelijkeWoordMiddens: string[] = ['-'];

    const gekozenWoordStarter: string = Arrays.bepaalWillekeurigElemntUitRij(mogelijkeWoordStarters);
    const gekozenWoordEinde: string = Arrays.bepaalWillekeurigElemntUitRij(mogelijkeWoordEindes);
    const gekozenWoordMiddens: string[] = [Arrays.bepaalWillekeurigElemntUitRij(mogelijkeWoordMiddens)];

    return this.combineerWoordDelen(gekozenWoordStarter, gekozenWoordMiddens, gekozenWoordEinde);
  }

  private bepaalWoordEindes(): string[] {
    return Array.from(new Set(this.woordStrings.map(ws => this.bepaalWoordEinde(ws))));
  }

  private bepaalWoordStarters() {
    return Array.from(new Set(this.woordStrings.map(ws => this.bepaalWoordStarter(ws))));
  }

  private bepaalWoordStarter(woord: string): string {
    const eindpositieWoordStarter = this.bepaalEindpositieEersteKlinkersGroepje(woord);
    if (eindpositieWoordStarter < 0 || eindpositieWoordStarter >= woord.length) {
      return  woord + this.bepaalWillekeurigeKlinker();
    }

    return woord.substring(0, eindpositieWoordStarter);
  }

  private combineerWoordDelen(woordStarter: string, woordMiddens: string[], woordEinde: string): string {
    return woordStarter /*+ woordMiddens*/ + woordEinde;

  }

  private bepaalWoordEinde(woord: string): string {
    const beginpositieWoordEinde = this.bepaalBeginpositieLaatsteMedeklinkersGroepje(woord);

    if (beginpositieWoordEinde < 0) {
      return this.bepaalWillekeurigeMedeklinker() + woord;
    }

    return woord.substring(beginpositieWoordEinde);
  }

  private bepaalBeginpositieLaatsteMedeklinkersGroepje(woord: string): number {
    let i = woord.length;
    let medeKlinkerGevonden = false;
    while (i > 0 && !medeKlinkerGevonden) {
      i--;
      if (this.isMedeklinker(woord.charAt(i))) {
        medeKlinkerGevonden = true;
      }
    }
    let j = i;
    let klinkerGevonden = false;
    while (j > 0 && !klinkerGevonden) {
      j--;
      if (this.isKlinker(woord.charAt(j))) {
        klinkerGevonden = true;
      }
    }

    i = j + 1;

    return medeKlinkerGevonden && klinkerGevonden ? i : -1;
  }


  private bepaalEindpositieEersteKlinkersGroepje(woord: string): number {

    let i = -1;
    let gevonden = false;
    while (i < woord.length && !gevonden) {
      i++;
      if (this.isKlinker(woord.charAt(i))) {
        gevonden = true;
      }
    }
    let j = i;
    let medeKlinkerGevonden = false;
    while (j < woord.length - 1 && !medeKlinkerGevonden) {
      j++;
      if (this.isMedeklinker(woord.charAt(j))) {
        medeKlinkerGevonden = true;
      }
    }

    i = j;

    if (i < 0) {
      i = 0;
    }
    return gevonden ? i : -1;
  }

  private isMedeklinker(letter: string) {
    return !this.isKlinker(letter);
  }

  private isKlinker(letter: string): boolean {
    return ['a', 'e', 'i', 'o', 'u', 'y', '-'].indexOf(letter.toLowerCase()) !== -1;
  }

  private bepaalWillekeurigeMedeklinker(): string {
    return Arrays.bepaalWillekeurigElemntUitRij(['b', 'c', 'd', 'f', 'g', 'h', 'j',
      'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']);
  }
  private bepaalWillekeurigeKlinker() {
    return Arrays.bepaalWillekeurigElemntUitRij(['a', 'e', 'i', 'o', 'u']);
  }
}

