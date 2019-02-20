import {Personage} from '../../models/personage';
import {WoordSoort} from '../../enums/woordsoort';

export const hofhouding: Personage[] =
  [
    {
      naam: 'ridder',
      lidwoord: 'de',
      meervoud: 'ridders',
      verkleinwoord: 'riddertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_ROYALTIEFIGUUR]
    },
    {
      naam: 'baron',
      lidwoord: 'de',
      meervoud: 'barons',
      verkleinwoord: 'baronnetje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_ROYALTIEFIGUUR]
    },
    {
      naam: 'graaf',
      lidwoord: 'de',
      meervoud: 'grafen',
      verkleinwoord: 'graafje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_ROYALTIEFIGUUR]
    },
    {
      naam: 'koning',
      lidwoord: 'de',
      meervoud: 'koningen',
      verkleinwoord: 'koninkje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_ROYALTIEFIGUUR]
    },
    {
      naam: 'konigin',
      lidwoord: 'de',
      meervoud: 'koninginnen',
      verkleinwoord: 'koninginnetje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_ROYALTIEFIGUUR]
    },
    {
      naam: 'prins',
      lidwoord: 'de',
      meervoud: 'prinsen',
      verkleinwoord: 'prinsje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_ROYALTIEFIGUUR]
    },
    {
      naam: 'prinses',
      lidwoord: 'de',
      meervoud: 'prinsessen',
      verkleinwoord: 'prinsesje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_ROYALTIEFIGUUR]
    },
    {
      naam: 'hofnar',
      lidwoord: 'de',
      meervoud: 'hofnarren',
      verkleinwoord: 'hofnarretje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_ROYALTIEFIGUUR]
    },
    {
      naam: 'troonopvolger',
      lidwoord: 'de',
      meervoud: 'troonopvolgers',
      verkleinwoord: 'troonopvolgertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE, WoordSoort.ZNW_ROYALTIEFIGUUR]
    }
  ];
