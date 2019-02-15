import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TitelmakerComponent} from './titelmaker.component';
import {TitelgeneratorComponent} from './paginas/titelgenerator/titelgenerator.component';
import {WoordenspammerComponent} from './paginas/woordenspammer/woordenspammer.component';

const routes: Routes = [
  {path: '', component: TitelgeneratorComponent},
  {path: 'woordenspammer', component: WoordenspammerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TitelmakerRoutingModule { }
