import {Personage} from '../../models/personage';
import {beroepen} from './beroepen';
import {fantasieFiguren} from './fantasie-figuren';
import {familieleden} from './familieleden';
import {dieren} from './dieren';
import {volkeren} from './nationaliteiten';
import {hofhouding} from './hofhouding';
import {voornamen} from './voornamen';
import {WoordSoort} from '../../enums/woordsoort';

export const personages: Personage[] =
  [
    ...beroepen,
    ...fantasieFiguren,
    ...familieleden,
    ...dieren,
    ...volkeren,
    ...hofhouding,
    ...voornamen,
    {
      naam: 'eskimo',
      lidwoord: 'de',
      meervoud: 'eskimo\'s',
      verkleinwoord: 'eskimootje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'holbewoner',
      lidwoord: 'de',
      meervoud: 'holbewoners',
      verkleinwoord: 'holbewonertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'viking',
      lidwoord: 'de',
      meervoud: 'vikings',
      verkleinwoord: 'vikinkje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'piraat',
      lidwoord: 'de',
      meervoud: 'piraten',
      verkleinwoord: 'piraatje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'indiaan',
      lidwoord: 'de',
      meervoud: 'indianen',
      verkleinwoord: 'indiaantje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'cowboy',
      lidwoord: 'de',
      meervoud: 'cowboys',
      verkleinwoord: 'cowboytje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'pelgrim',
      lidwoord: 'de',
      meervoud: 'pelgrims',
      verkleinwoord: 'pelgrimpje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'toerist',
      lidwoord: 'de',
      meervoud: 'toeristen',
      verkleinwoord: 'toeristje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'vogelspotter',
      lidwoord: 'de',
      meervoud: 'vogelspotters',
      verkleinwoord: 'vogelspottertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'postzegelverzamelaar',
      lidwoord: 'de',
      meervoud: 'postzegelverzamelaars',
      verkleinwoord: 'postzegelverzamelaartje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'bergbeklimmer',
      lidwoord: 'de',
      meervoud: 'bergbeklimmers',
      verkleinwoord: 'bergbeklimmertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'Kiss-fan',
      lidwoord: 'de',
      meervoud: 'Kiss-fans',
      verkleinwoord: 'Kiss-fannetje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'bourgondiër',
      lidwoord: 'de',
      meervoud: 'bourgondiërs',
      verkleinwoord: 'bourgondiërtje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'klant',
      lidwoord: 'de',
      meervoud: 'klanten',
      verkleinwoord: 'klantje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'veelvraat',
      lidwoord: 'de',
      meervoud: 'veelvraten',
      verkleinwoord: 'veelvraatje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'leugenaar',
      lidwoord: 'de',
      meervoud: 'leugenaars',
      verkleinwoord: 'leugenaartje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'gulzigaard',
      lidwoord: 'de',
      meervoud: 'gulzigaards',
      verkleinwoord: 'gulzigaardje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'baas',
      lidwoord: 'de',
      meervoud: 'bazen',
      verkleinwoord: 'baasje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'inwijkeling',
      lidwoord: 'de',
      meervoud: 'inwijkelingen',
      verkleinwoord: 'inwijkelingetje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'optimist',
      lidwoord: 'de',
      meervoud: 'optimisten',
      verkleinwoord: 'optimistje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'zwerver',
      lidwoord: 'de',
      meervoud: 'zwervers',
      verkleinwoord: 'zwervertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'bedelaar',
      lidwoord: 'de',
      meervoud: 'bedelaars',
      verkleinwoord: 'bedelaartje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'kandidaat',
      lidwoord: 'de',
      meervoud: 'kandidaten',
      verkleinwoord: 'kandidaatje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'sollicitant',
      lidwoord: 'de',
      meervoud: 'sollicitanten',
      verkleinwoord: 'sollicitantje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'betoger',
      lidwoord: 'de',
      meervoud: 'betogers',
      verkleinwoord: 'betogertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'zondaar',
      lidwoord: 'de',
      meervoud: 'zondaars',
      verkleinwoord: 'zondaartje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'laatkomer',
      lidwoord: 'de',
      meervoud: 'laatkomers',
      verkleinwoord: 'laatkomertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'verslaafde',
      lidwoord: 'de',
      meervoud: 'verslaafden',
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'zieke',
      lidwoord: 'de',
      meervoud: 'zieken',
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'arme',
      lidwoord: 'de',
      meervoud: 'armen',
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'rijke',
      lidwoord: 'de',
      meervoud: 'rijken',
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'treuzelaar',
      lidwoord: 'de',
      meervoud: 'treuzelaars',
      verkleinwoord: 'treuzelaartje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'piekeraar',
      lidwoord: 'de',
      meervoud: 'piekeraars',
      verkleinwoord: 'piekeraartje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'filosoof',
      lidwoord: 'de',
      meervoud: 'filosofen',
      verkleinwoord: 'filosoofje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'betweter',
      lidwoord: 'de',
      meervoud: 'betweters',
      verkleinwoord: 'betwetertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'leerling',
      lidwoord: 'de',
      meervoud: 'leerlingen',
      verkleinwoord: 'leerlingetje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'winnaar',
      lidwoord: 'de',
      meervoud: 'winnaars',
      verkleinwoord: 'winnaartje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'verliezer',
      lidwoord: 'de',
      meervoud: 'verliezers',
      verkleinwoord: 'verliezertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'crimineel',
      lidwoord: 'de',
      meervoud: 'criminelen',
      verkleinwoord: 'crimineeltje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'stouterik',
      lidwoord: 'de',
      meervoud: 'stouteriken',
      verkleinwoord: 'stouterikje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'verleider',
      lidwoord: 'de',
      meervoud: 'verleiders',
      verkleinwoord: 'verleidertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'dief',
      lidwoord: 'de',
      meervoud: 'dieven',
      verkleinwoord: 'diefje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'klikspaan',
      lidwoord: 'de',
      meervoud: 'klikspanen',
      verkleinwoord: 'klikspaantje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'dorpsgek',
      lidwoord: 'de',
      meervoud: 'dorpsgekken',
      verkleinwoord: 'dorpsgekje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'zot',
      lidwoord: 'de',
      meervoud: 'zotten',
      verkleinwoord: 'zotje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'rover',
      lidwoord: 'de',
      meervoud: 'rovers',
      verkleinwoord: 'rovertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'wijnkenner',
      lidwoord: 'de',
      meervoud: 'wijnkenners',
      verkleinwoord: 'wijnkennertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'buurman',
      lidwoord: 'de',
      meervoud: 'buurmannen',
      verkleinwoord: 'buurmannetje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'buurvrouw',
      lidwoord: 'de',
      meervoud: 'buurvrouwen',
      verkleinwoord: 'buurvrouwtje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: '80-jarige',
      lidwoord: 'de',
      meervoud: '80-jarigen',
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'ADHD-kind',
      lidwoord: 'het',
      meervoud: 'ADHD-kinderen',
      verkleinwoord: 'ADHD-kindje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'levensgezel',
      lidwoord: 'de',
      meervoud: 'levensgezellen',
      verkleinwoord: 'levensgezelletje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'levensgezellin',
      lidwoord: 'de',
      meervoud: 'levensgezellinnen',
      verkleinwoord: 'levensgezellinnetje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'levensgenieter',
      lidwoord: 'de',
      meervoud: 'levensgenieters',
      verkleinwoord: 'levensgenietertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'lezer',
      lidwoord: 'de',
      meervoud: 'lezers',
      verkleinwoord: 'lezertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'lezeres',
      lidwoord: 'de',
      meervoud: 'lezeressen',
      verkleinwoord: 'lezeresje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'lezerspanel',
      lidwoord: 'het',
      meervoud: 'lezerspanels',
      verkleinwoord: 'lezerspaneltje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'liberaal',
      lidwoord: 'de',
      meervoud: 'liberalen',
      verkleinwoord: 'liberaaltje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'lief',
      lidwoord: 'het',
      meervoud: null,
      verkleinwoord: 'liefje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'lieveling',
      lidwoord: 'de',
      meervoud: 'lievelingen',
      verkleinwoord: 'lievelingetje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'lievelingsacteur',
      lidwoord: 'de',
      meervoud: 'lievelingsacteurs',
      verkleinwoord: 'lievelingsacteurtje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'lievelingsschrijver',
      lidwoord: 'de',
      meervoud: 'lievelingsschrijvers',
      verkleinwoord: 'lievelingsschrijvertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'lievelingszoon',
      lidwoord: 'de',
      meervoud: 'lievelingszonen',
      verkleinwoord: 'lievelingszoontje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'lieverd',
      lidwoord: 'de',
      meervoud: 'lieverds',
      verkleinwoord: 'lieverdje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'foetelaar',
      lidwoord: 'de',
      meervoud: 'foetelaars',
      verkleinwoord: 'foetelaartje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'kanibaal',
      lidwoord: 'de',
      meervoud: 'kanibalen',
      verkleinwoord: 'kanibaaltje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'hippie',
      lidwoord: 'de',
      meervoud: 'hippies',
      verkleinwoord: 'hippietje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'peuter',
      lidwoord: 'de',
      meervoud: 'peuters',
      verkleinwoord: 'peutertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'kleuter',
      lidwoord: 'de',
      meervoud: 'kleuters',
      verkleinwoord: 'kleutertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'pianospeler',
      lidwoord: 'de',
      meervoud: 'pianospelers',
      verkleinwoord: 'pianospelertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'persoon',
      lidwoord: 'de',
      meervoud: 'personen',
      verkleinwoord: 'persoontje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'personeelslid',
      lidwoord: 'het',
      meervoud: 'personeelsleden',
      verkleinwoord: 'personeelslidje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'klasgenoot',
      lidwoord: 'de',
      meervoud: 'klasgenoten',
      verkleinwoord: 'klasgenootje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'stakker',
      lidwoord: 'de',
      meervoud: 'stakkers',
      verkleinwoord: 'stakkertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'wiebelkont',
      lidwoord: 'de',
      meervoud: 'wiebelkonten',
      verkleinwoord: 'wiebelkontje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'zwemmer',
      lidwoord: 'de',
      meervoud: 'zwemmers',
      verkleinwoord: 'zwemmertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'mopperkont',
      lidwoord: 'de',
      meervoud: 'mopperkonten',
      verkleinwoord: 'mopperkontje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'ware Jozef',
      lidwoord: 'de',
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'ploegmakker',
      lidwoord: 'de',
      meervoud: 'ploegmakkers',
      verkleinwoord: 'ploegmakkertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'dorpsgenoot',
      lidwoord: 'de',
      meervoud: 'dorpsgenoten',
      verkleinwoord: 'dorpsgenootje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'partijgenoot',
      lidwoord: 'de',
      meervoud: 'partijgenoten',
      verkleinwoord: 'partijgenootje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'werkmakker',
      lidwoord: 'de',
      meervoud: 'werkmakkers',
      verkleinwoord: 'werkmakkertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'psychoot',
      lidwoord: 'de',
      meervoud: 'psychoten',
      verkleinwoord: 'psychootje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'ja-stemmer',
      lidwoord: 'de',
      meervoud: 'ja-stemmers',
      verkleinwoord: 'ja-stemmertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'strijdmakker',
      lidwoord: 'de',
      meervoud: 'strijdmakkers',
      verkleinwoord: 'strijdmakkertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'B-acteur',
      lidwoord: 'de',
      meervoud: 'B-acteurs',
      verkleinwoord: 'B-acteurtje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'grapjas',
      lidwoord: 'de',
      meervoud: 'grapjassen',
      verkleinwoord: 'grapjasje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'bendelid',
      lidwoord: 'de',
      meervoud: 'bendeleden',
      verkleinwoord: 'bendelidje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'speler',
      lidwoord: 'de',
      meervoud: 'spelers',
      verkleinwoord: 'spelertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'basketbalspeler',
      lidwoord: 'de',
      meervoud: 'basketbalspelers',
      verkleinwoord: 'basketbalspelertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'vriendin',
      lidwoord: 'de',
      meervoud: 'vriendinnen',
      verkleinwoord: 'vriendinnetje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'dromer',
      lidwoord: 'de',
      meervoud: 'dromers',
      verkleinwoord: 'dromertje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'bengel',
      lidwoord: 'de',
      meervoud: 'bengels',
      verkleinwoord: 'bengeltje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'leerlingenraad',
      lidwoord: 'de',
      meervoud: null,
      verkleinwoord: null,
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'halfgod',
      lidwoord: 'de',
      meervoud: 'halfgoden',
      verkleinwoord: 'halfgodje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    },
    {
      naam: 'vrouwenzot',
      lidwoord: 'de',
      meervoud: 'vrouwenzotten',
      verkleinwoord: 'vrouwenzotje',
      woordsoorten: [WoordSoort.ZNW_PERSONAGE]
    }
  ];
