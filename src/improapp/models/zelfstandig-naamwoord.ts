import {Woord} from './woord';
import {WoordSoort} from '../enums/woordsoort';

export class ZelfstandigNaamwoord extends Woord {
  naam: string;
  lidwoord: string;
  meervoud: string;
  verkleinwoord: string;
  woordsoorten: WoordSoort[];
}
