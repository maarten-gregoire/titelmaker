import { Component, OnInit } from '@angular/core';
import {TitelService} from '../services/titel/titel.service';
import {CategorieService} from '../services/categorie/categorie.service';
import {Randoms} from '../util/randoms';
import {WoordService} from '../services/woord/woord.service';

@Component({
  selector: 'tm-woordenspammer',
  templateUrl: './woordenspammer.component.html',
  styleUrls: ['./woordenspammer.component.css']
})
export class WoordenspammerComponent implements OnInit {

  gegenereerdWoord: string;

  constructor(private woordService: WoordService) {}

  ngOnInit() {
  }

  genereerSuggestie() {
    this.genereerWoord();
  }

  genereerWoord() {
    this.woordService.geefWillekeurigWoord().subscribe((woord) => {
      this.gegenereerdWoord = woord;
    });
  }

  reset() {
    this.gegenereerdWoord = undefined;
  }

}
