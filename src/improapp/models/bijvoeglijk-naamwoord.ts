import {WoordSoort} from '../enums/woordsoort';
import {Woord} from './woord';

export class BijvoeglijkNaamwoord extends Woord {
  woord: string;
  tweedeVorm: string;
  toepasbaarOp: WoordSoort[];
}
