import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Arrays} from '../../util/arrays';
import {categorieën} from '../../data/categorieën';
import {Categorie} from '../../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }

  bepaalCategorie(): Observable<string> {
    return of(Arrays.bepaalWillekeurigElemntUitRij<Categorie>(categorieën).categorie);
  }

}
