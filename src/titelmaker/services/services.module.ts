import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitelService} from './titel/titel.service';
import {CategorieService} from './categorie/categorie.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [TitelService, CategorieService]
})

export class ServicesModule { }
