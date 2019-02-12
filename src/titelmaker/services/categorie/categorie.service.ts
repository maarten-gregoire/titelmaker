import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Arrays} from '../../util/arrays';
import {categorieen} from '../../data/categorieen';
import {Categorie} from '../../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }

  bepaalCategorie(): Observable<string> {
    return of(Arrays.bepaalWillekeurigElemntUitRij<Categorie>(categorieen).categorie);
  }

}
