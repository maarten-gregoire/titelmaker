import { Component, OnInit } from '@angular/core';
import {PersonageService} from '../../services/personage/personage.service';
import {BijvoeglijkNaamwoordService} from '../../services/bijvoeglijk-naamwoord/bijvoeglijk-naamwoord.service';
import {LocatieService} from '../../services/locatie/locatie.service';
import {VoorwerpService} from '../../services/voorwerp/voorwerp.service';
import {CategorieService} from '../../services/categorie/categorie.service';
import {HandelingService} from '../../services/handeling/handeling.service';
import {WoordService} from '../../services/woord/woord.service';

@Component({
  selector: 'tm-suggereerder',
  templateUrl: './suggereerder.component.html',
  styleUrls: ['./suggereerder.component.css']
})
export class SuggereerderComponent implements OnInit {

  suggestie = '';
  gevraagdeSuggestie = '';
  icoon = 'batch-icon-speech-bubble-left-tip';
  achtergrondkleur = 'bg-danger';

  constructor(private personageService: PersonageService, private bijvoeglijknaamwoordService: BijvoeglijkNaamwoordService,
              private locatieService: LocatieService, private voorwerpService: VoorwerpService,
              private categorieService: CategorieService, private handelingService: HandelingService,
              private woordService: WoordService) { }

  ngOnInit() {
  }

  genereerPersonage() {
    this.personageService.geefWillekeurigPersonage().subscribe(p => {
      this.suggestie = p;
    });

    this.gevraagdeSuggestie = 'personage';
    this.icoon = 'batch-icon-user-alt';
    this.achtergrondkleur = 'bg-personage';
  }

  genereerLocatie() {
    this.locatieService.geefWillekeurigeLocatie().subscribe(l => {
      this.suggestie = l;
    });

    this.gevraagdeSuggestie = 'Locatie';
    this.icoon = 'batch-icon-pin-alt';
    this.achtergrondkleur = 'bg-locatie';
  }

  genereerEmotie() {
    this.bijvoeglijknaamwoordService.geefWillekeurigeEmotie().subscribe(b => {
      this.suggestie = b;
    });

    this.gevraagdeSuggestie = 'Emotie';
    this.icoon = 'batch-icon-droplet';
    this.achtergrondkleur = 'bg-emotie';
  }

  genereerVoorwerp() {
    this.voorwerpService.geefWillekeurigVoorwerp().subscribe(v => {
      this.suggestie = v;
    });

    this.gevraagdeSuggestie = 'Voorwerp';
    this.icoon = 'batch-icon-bulb-alt';
    this.achtergrondkleur = 'bg-voorwerp';
  }

  genereerBeroep() {
    this.personageService.geefWillekeurigBeroep().subscribe(b => {
      this.suggestie = b;
    });

    this.gevraagdeSuggestie = 'Beroep';
    this.icoon = 'batch-icon-anchor';
    this.achtergrondkleur = 'bg-beroep';
  }

  genereerDier() {
    this.personageService.geefWillekeurigDier().subscribe(d => {
      this.suggestie = d;
    });

    this.gevraagdeSuggestie = 'Dier';
    this.icoon = 'batch-icon-intersect';
    this.achtergrondkleur = 'bg-dier';
  }

  genereerBijvoeglijkNaamwoord() {
    this.bijvoeglijknaamwoordService.geefWillekeurigBijvoeglijkNaamwoord().subscribe(b => {
      this.suggestie = b;
    });

    this.gevraagdeSuggestie = 'Bijvoeglijk naamwoord';
    this.icoon = 'batch-icon-star';
    this.achtergrondkleur = 'bg-bijvoeglijk-naamwoord';
  }

  genereerCategorie() {
    this.categorieService.bepaalCategorie().subscribe(c => {
      this.suggestie = c;
    });

    this.gevraagdeSuggestie = 'Categorie';
    this.icoon = 'batch-icon-quill';
    this.achtergrondkleur = 'bg-primary';
  }

  genereerHandeling() {
    this.handelingService.geefWillekeurigeLocatie().subscribe( b => {
      this.suggestie = b;
    });

    this.gevraagdeSuggestie = 'Handeling';
    this.icoon = 'batch-icon-wave';
    this.achtergrondkleur = 'bg-handeling';
  }

  genereerOnbestaandWoord() {
    this.woordService.geefOnbestaandWoord().subscribe( b => {
      this.suggestie = b;
    });

    this.gevraagdeSuggestie = 'Onbestaand woord';
    this.icoon = 'batch-icon-mail-alt';
    this.achtergrondkleur = 'bg-onbestaand-woord';
  }

  reset() {
    this.suggestie = '';
    this.gevraagdeSuggestie = '';
    this.icoon = '';
    this.achtergrondkleur = '';
  }
}
