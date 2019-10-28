import {Vorm} from '../enums/vorm';
import {LidwoordSoort} from '../enums/lidwoordsoort';

export class TitelConfiguratie {
  aantalBijvoeglijkNaamwoorden: number;
  aantalPersonages: number;
  aantalVoorwerpen: number;
  aantalLocaties: number;
  vormPersonages: Vorm;
  vormVoorwerpen: Vorm;
  vormLocaties: Vorm;
  lidwoordSoort: LidwoordSoort;
}
