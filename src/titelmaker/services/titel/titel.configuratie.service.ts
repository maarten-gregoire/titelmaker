import {Injectable} from '@angular/core';
import {TitelConfiguratie} from '../../configuraties/titelConfiguratie';
import {Randoms} from '../../util/randoms';
import {Vorm} from '../../enums/vorm';
import {LidwoordSoort} from '../../enums/lidwoordsoort';

@Injectable({
  providedIn: 'root'
})
export class TitelConfiguratieService {
  maakWillekeurigeTitelConfiguratie() {
    let configuratie: TitelConfiguratie = {
      aantalBijvoeglijkNaamwoorden: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      aantalPersonages: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      aantalVoorwerpen: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      aantalLocaties: Randoms.maakRandomGetalTussenEnInbegrepen(0, 1),
      vormPersonages: Randoms.bepaalRandomEnumValue(Vorm),
      vormVoorwerpen: Randoms.bepaalRandomEnumValue(Vorm),
      vormLocaties: Randoms.bepaalRandomEnumValue(Vorm),
      lidwoordSoort: Randoms.bepaalRandomEnumValue(LidwoordSoort)
    };
    configuratie = this.beperkKansOpMaar1Zinsdeel(configuratie);
    configuratie = this.beperkAantalZelfstandigeNaamwoordenTotMaximum2(configuratie);

    return configuratie;
  }

  private beperkAantalZelfstandigeNaamwoordenTotMaximum2(configuratie: TitelConfiguratie): TitelConfiguratie {
    while (configuratie.aantalPersonages + configuratie.aantalVoorwerpen + configuratie.aantalLocaties > 2) {
      switch (Randoms.maakRandomGetalTussenEnInbegrepen(1, 3)) {
        case 1:
          configuratie.aantalLocaties = 0;
          break;
        case 2:
          configuratie.aantalVoorwerpen = 0;
          break;
        case 3:
        default:
          configuratie.aantalPersonages = 0;
          break;
      }
    }
    return configuratie;
  }

  private beperkKansOpMaar1Zinsdeel(configuratie: TitelConfiguratie): TitelConfiguratie {
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
}
