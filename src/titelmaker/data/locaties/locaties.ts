import {Locatie} from '../../models/locatie';
import {WoordSoort} from '../../enums/woordsoort';

export const locaties: Locatie[] =
  [
    {
      naam: 'kast',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'op', 'naast', 'bij'],
      voorzetselsVoorwerp: ['in', 'op', 'onder'],
      meervoud: 'kasten',
      verkleinwoord: 'kastje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'huis',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'op', 'naast', 'bij'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'huizen',
      verkleinwoord: 'huisje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'garage',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'voor', 'naast', 'bij'],
      voorzetselsVoorwerp: ['in', 'voor'],
      meervoud: 'garages',
      verkleinwoord: 'garagetje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Opgrimbie',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Pakistan',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in', 'nabij'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'brouwerij',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'brouwerijen',
      verkleinwoord: 'brouwerijtje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'keuken',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'keukens',
      verkleinwoord: 'keukentje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'hoenderhok',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'naast'],
      voorzetselsVoorwerp: ['in', 'op', 'naast'],
      meervoud: 'hoenderhokken',
      verkleinwoord: 'hoenderhokje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kerk',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'op', 'bij', 'naast'],
      voorzetselsVoorwerp: ['in', 'op'],
      meervoud: 'kerken',
      verkleinwoord: 'kerkje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'ijssalon',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'bij', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'ijssalons',
      verkleinwoord: 'ijssalonnetje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'meubelwinkel',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'bij', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'meubelwinkels',
      verkleinwoord: 'meubelwinkeltje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'drukkerij',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'bij', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'drukkerijen',
      verkleinwoord: 'drukkerijtje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'boerderij',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'op', 'bij', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'boerderijen',
      verkleinwoord: 'boerderijtje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'school',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'voor', 'naast', 'bij'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'scholen',
      verkleinwoord: 'schooltje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kist',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'op'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'kisten',
      verkleinwoord: 'kistje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'bruidsboetiek',
      lidwoord: 'de',
      voorzetselsPersonage: ['in',  'naast', 'bij'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'bruidsboetieken',
      verkleinwoord: 'bruidsboetiekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'televisiestudio',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'bij'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'televisiestudio\'s',
      verkleinwoord: 'televisiestudiootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'ziekenhuis',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'bij', 'achter', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'ziekenhuizen',
      verkleinwoord: 'ziekenhuisje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Nepal',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Londen',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'bibliotheek',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'bij', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'bibliotheken',
      verkleinwoord: 'bibliotheekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'tandartspraktijk',
      lidwoord: 'de',
      voorzetselsPersonage: ['bij', 'aan', 'in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'tandartsen',
      verkleinwoord: 'tandartsje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'toilet',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'op', 'bij', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'toiletten',
      verkleinwoord: 'toiletje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'koelkast',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'bij', 'naast', 'op', 'achter'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'koelkasten',
      verkleinwoord: 'koelkastje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'combi',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'combi\'s',
      verkleinwoord: 'combietje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'vogelnest',
      lidwoord: 'het',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'vogelnesten',
      verkleinwoord: 'vogelnestje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Leuven',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Oostenrijk',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'zee',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'aan'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'zeeën',
      verkleinwoord: 'zeetje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'woonkamer',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'woonkamers',
      verkleinwoord: 'woonkamertje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'hondenhok',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'op', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'hondenhokken',
      verkleinwoord: 'hondenhokje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kennel',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'bij'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'kennels',
      verkleinwoord: 'kenneltje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'speeltuin',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'bij'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'ijssalons',
      verkleinwoord: 'speeltuintje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kermis',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'kermissen',
      verkleinwoord: 'kermisje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'avondmarkt',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'avondmarkten',
      verkleinwoord: 'avondmarktje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'veranda',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'veranda\'s',
      verkleinwoord: 'verandaatje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'pretpark',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'pretparken',
      verkleinwoord: 'pretparkje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'duikboot',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'aan', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'duikboten',
      verkleinwoord: 'duikbootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'klaslokaal',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'naast', 'aan'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'klaslokalen',
      verkleinwoord: 'klaslokaaltje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'muziekschool',
      lidwoord: 'de',
      voorzetselsPersonage: ['aan', 'in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'muziekscholen',
      verkleinwoord: 'muziekschooltje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'concertzaal',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'aan'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'concertzalen',
      verkleinwoord: 'concertzaaltje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'voetbalveld',
      lidwoord: 'het',
      voorzetselsPersonage: ['op', 'aan', 'naast'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'voetbalvelden',
      verkleinwoord: 'voetbalveldje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'turnzaal',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'aan', 'achter', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'turnzalen',
      verkleinwoord: 'turnzaaltje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'gemeentehuis',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'naast', 'aan', 'bij'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'gemeentehuizen',
      verkleinwoord: 'gemeentehuisje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'landsgrens',
      lidwoord: 'de',
      voorzetselsPersonage: ['aan', 'op', 'naast', 'bij'],
      voorzetselsVoorwerp: ['aan'],
      meervoud: 'landsgrenzen',
      verkleinwoord: 'landsgrensje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Hong Kong',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'café',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'aan', 'bij', 'achter', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'cafés',
      verkleinwoord: 'cafeetje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kelder',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'kelders',
      verkleinwoord: 'keldertje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'discotheek',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'naast', 'achter'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'discotheken',
      verkleinwoord: 'discotheekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'woonboot',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'op', 'naast'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'woonboten',
      verkleinwoord: 'woonbootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'motorboot',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'motorboten',
      verkleinwoord: 'motorbootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'zeilboot',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'zeilboten',
      verkleinwoord: 'zeilbootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'roeiboot',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'roeiboten',
      verkleinwoord: 'roeibootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kano',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'kano\'s',
      verkleinwoord: 'kanootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'schip',
      lidwoord: 'het',
      voorzetselsPersonage: ['op', 'naast'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'schepen',
      verkleinwoord: 'scheepje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kraaiennest',
      lidwoord: 'het',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'kraaiennesten',
      verkleinwoord: 'kraaiennestje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'dek',
      lidwoord: 'het',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'dekken',
      verkleinwoord: 'dekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kajuit',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'aan'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'kajuiten',
      verkleinwoord: 'kajuitje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'loopplank',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'loopplanken',
      verkleinwoord: 'looopplankje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'land',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'landen',
      verkleinwoord: 'landje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'eiland',
      lidwoord: 'het',
      voorzetselsPersonage: ['op', 'naast'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'eilanden',
      verkleinwoord: 'eilandje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'palmboom',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'onder'],
      voorzetselsVoorwerp: ['in', 'onder'],
      meervoud: 'palmbomen',
      verkleinwoord: 'palmboompje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'zeebodem',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'zeebodems',
      verkleinwoord: 'zeebodempje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'vindplaats',
      lidwoord: 'de',
      voorzetselsPersonage: ['op', 'bij', 'aan'],
      voorzetselsVoorwerp: ['bij'],
      meervoud: 'vindplaatsen',
      verkleinwoord: 'vindplaatsje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'zwembad',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'bij', 'aan'],
      voorzetselsVoorwerp: ['in', 'bij'],
      meervoud: 'zwembaden',
      verkleinwoord: 'zwembadje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'gevangenis',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'naast', 'bij'],
      voorzetselsVoorwerp: ['bij'],
      meervoud: 'gevangenissen',
      verkleinwoord: 'gevangenisje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'vensterbank',
      lidwoord: 'de',
      voorzetselsPersonage: ['naast'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'vensterbanken',
      verkleinwoord: 'vensterbankje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'vuilnisbak',
      lidwoord: 'de',
      voorzetselsPersonage: ['op', 'in', 'naast'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'vuilnisbakken',
      verkleinwoord: 'vuiinisbakje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'bos',
      lidwoord: 'het',
      voorzetselsPersonage: ['in', 'bij'],
      voorzetselsVoorwerp: ['in', 'bij'],
      meervoud: 'bossen',
      verkleinwoord: 'bosje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'hol',
      lidwoord: 'het',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'hollen',
      verkleinwoord: 'holletje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'hoofdkwartier',
      lidwoord: 'het',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'hoofdkwartieren',
      verkleinwoord: 'hoofdkwartiertje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'restaurant',
      lidwoord: 'het',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'restaurants',
      verkleinwoord: 'restaurantje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Absurdistan',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'liedjesfestival',
      lidwoord: 'het',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'liedjesfestivallen',
      verkleinwoord: 'liedjesfestivalletje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'liedjesprogramma',
      lidwoord: 'het',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'liedjesprogramma\'s',
      verkleinwoord: 'liedjesprogrammaatje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'pensenkermis',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'pensenkermissen',
      verkleinwoord: 'pensenkermisje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'perron',
      lidwoord: 'het',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'perronnen',
      verkleinwoord: 'perronnetje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'piramide',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'piramides',
      verkleinwoord: 'piramidetje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'huis',
      lidwoord: 'het',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'huizen',
      verkleinwoord: 'huisje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'lichtstad',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'speelplaats',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: null,
      verkleinwoord: 'speelplaatsje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'speeltuin',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: 'speeltuintje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'jungle',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: 'jugnletje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'maan',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Afrika',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'boom',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'bij'],
      voorzetselsVoorwerp: ['in', 'bij'],
      meervoud: 'bomen',
      verkleinwoord: 'boompje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'waterput',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'bij'],
      voorzetselsVoorwerp: ['in', 'bij'],
      meervoud: 'waterputten',
      verkleinwoord: 'waterputje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'straat',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'straten',
      verkleinwoord: 'straatje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'snelweg',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'snelwegen',
      verkleinwoord: 'snelwegje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'trein',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'treinen',
      verkleinwoord: 'treintje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'spoor',
      lidwoord: 'het',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'sporen',
      verkleinwoord: 'spoortje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'wei',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'weien',
      verkleinwoord: 'weitje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kruispunt',
      lidwoord: 'het',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'kruispunten',
      verkleinwoord: 'kruispuntje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'grasveld',
      lidwoord: 'het',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'grasvelden',
      verkleinwoord: 'grasveldje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Duitsland',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'België',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Nederland',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'boot',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'boten',
      verkleinwoord: 'bootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'akker',
      lidwoord: 'het',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'akkers',
      verkleinwoord: 'akkertje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'veerpont',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'wedstrijdboot',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'wedstrijdboten',
      verkleinwoord: 'wedstrijdbootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'speedboot',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'speedboten',
      verkleinwoord: 'speedbootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'sloot',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: 'slootje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'terras',
      lidwoord: 'het',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'terrassen',
      verkleinwoord: 'terrasje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'surfplas',
      lidwoord: 'de',
      voorzetselsPersonage: ['op'],
      voorzetselsVoorwerp: ['op'],
      meervoud: 'surfplassen',
      verkleinwoord: 'surfplasje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Wemmel',
      lidwoord: null,
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'ontbijthoek',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'ontbijthoeken',
      verkleinwoord: 'ontbijthoekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'basiliek',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'basilieken',
      verkleinwoord: 'basiliekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'vakantievilla',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'vakantievilla\'s',
      verkleinwoord: 'vakantievillaatje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'hoek',
      lidwoord: 'de',
      voorzetselsPersonage: ['in', 'op'],
      voorzetselsVoorwerp: ['in', 'op'],
      meervoud: 'hoeken',
      verkleinwoord: 'hoekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'leeshoek',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'leeshoeken',
      verkleinwoord: 'leeshoekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'villa',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'villa\'s',
      verkleinwoord: 'villaatje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'Andes',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'plas',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'plassen',
      verkleinwoord: 'plasje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'klas',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'klassen',
      verkleinwoord: 'klasje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'frietkot',
      lidwoord: 'het',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'frietkoten',
      verkleinwoord: 'frietkotje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kiekenkot',
      lidwoord: 'het',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'kiekenkoten',
      verkleinwoord: 'kiekenkotje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'kaasfabriek',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'kaasfabrieken',
      verkleinwoord: 'kaasfabriekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    },
    {
      naam: 'koekjesfabriek',
      lidwoord: 'de',
      voorzetselsPersonage: ['in'],
      voorzetselsVoorwerp: ['in'],
      meervoud: 'koekjesfabrieken',
      verkleinwoord: 'koekjesfabriekje',
      woordsoorten: [WoordSoort.ZNW_LOCATIE]
    }
  ];

// NOOIT ENKEL BIJ ALS VOORZETSEN GEBRUIKEN, totdat het systeem hiermee om kan gaan
