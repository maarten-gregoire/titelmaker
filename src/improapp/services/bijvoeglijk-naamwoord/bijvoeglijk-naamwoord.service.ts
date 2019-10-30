import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {voorwerpen} from '../../data/voorwerpen/voorwerpen';
import {Arrays} from '../../util/arrays';
import {Voorwerp} from '../../models/voorwerp';
import {LaatstGebruikteWoordenLijst} from '../laatst-gebruikte-woorden-lijst';
import {Personage} from '../../models/personage';
import {personages} from '../../data/personages/personages';
import {beroepen} from '../../data/personages/beroepen';
import {bijvoeglijkNaamwoorden} from '../../data/bijvoeglijk-naamwoorden/bijvoeglijk-naamwoorden';
import {BijvoeglijkNaamwoord} from '../../models/bijvoeglijk-naamwoord';
import {emoties} from '../../data/bijvoeglijk-naamwoorden/emoties';

@Injectable({
  providedIn: 'root'
})
export class BijvoeglijkNaamwoordService {

  recenteBijvoeglijkNaamwoorden: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(30);
  recenteEmoties: LaatstGebruikteWoordenLijst = new LaatstGebruikteWoordenLijst(5);

  constructor() { }

  geefWillekeurigBijvoeglijkNaamwoord(): Observable<string> {
    let bijvoeglijkNaamwoord: BijvoeglijkNaamwoord;
    do {
      bijvoeglijkNaamwoord = Arrays.bepaalWillekeurigElementUitRij(bijvoeglijkNaamwoorden.filter(
        p => !this.recenteBijvoeglijkNaamwoorden.zitWoordInLijst(p)));
      if (!bijvoeglijkNaamwoord) {
        this.recenteBijvoeglijkNaamwoorden.maakLeeg();
      }
    } while (!bijvoeglijkNaamwoord);
    this.recenteBijvoeglijkNaamwoorden.voegWoordToe(bijvoeglijkNaamwoord);
    return of(bijvoeglijkNaamwoord.woord);
  }

  geefWillekeurigeEmotie(): Observable<string> {
    let emotie: BijvoeglijkNaamwoord;
    do {
      emotie = Arrays.bepaalWillekeurigElementUitRij(emoties.filter(p => !this.recenteEmoties.zitWoordInLijst(p)));
      if (!emotie) {
        this.recenteEmoties.maakLeeg();
      }
    } while (!emotie);
    this.recenteEmoties.voegWoordToe(emotie);
    return of(emotie.woord);
  }
}
