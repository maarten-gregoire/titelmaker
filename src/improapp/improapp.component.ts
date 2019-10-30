import { Component } from '@angular/core';

@Component({
  selector: 'tm-root',
  templateUrl: './imroapp.component.html',
  styleUrls: ['./improapp.component.css']
})
export class ImproappComponent {
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
