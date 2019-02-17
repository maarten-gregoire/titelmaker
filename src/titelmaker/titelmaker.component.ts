import { Component } from '@angular/core';

@Component({
  selector: 'tm-root',
  templateUrl: './titelmaker.component.html',
  styleUrls: ['./titelmaker.component.css']
})
export class TitelmakerComponent {
  title = 'titelmaker';
  chosenPage = 'titelmaker';

  chosenPageIs(page: string) {
    return page === this.chosenPage;
  }

  setChosenPage(page: string) {
    this.chosenPage = page;
  }

  activeIfPageIs(page: string): string {
    return this.chosenPageIs(page) ? 'active' : '';
  }

}
