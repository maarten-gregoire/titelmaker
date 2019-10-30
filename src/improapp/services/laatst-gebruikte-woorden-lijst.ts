import {Woord} from '../models/woord';

export class LaatstGebruikteWoordenLijst {

  aantalWoordenTeOnthouden = 20;
  woordenLijst: Woord[] = [];

  constructor(aantalWoordenTeOnthouden: number) {
    if (aantalWoordenTeOnthouden >= 0) {
      this.aantalWoordenTeOnthouden = aantalWoordenTeOnthouden;
    }
  }

  public voegWoordToe(woord: Woord) {
    if (woord) {
      this.woordenLijst[this.woordenLijst.length] = woord;
    }
    this.verwijderOudsteWoordIndienNodig();
  }

  zitWoordInLijst(woord: Woord): boolean {
    return this.woordenLijst.filter((w) => w === woord).length > 0;
  }

  private verwijderOudsteWoordIndienNodig() {
    if (this.woordenLijst.length > this.aantalWoordenTeOnthouden) {
      this.woordenLijst.splice(0, 1);
    }
  }

  maakLeeg() {
    this.woordenLijst = [];
  }


}
