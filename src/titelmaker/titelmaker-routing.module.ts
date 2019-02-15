import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TitelmakerComponent} from './titelmaker.component';
import {TitelgeneratorComponent} from './paginas/titelgenerator/titelgenerator.component';
import {WoordenspammerComponent} from './paginas/woordenspammer/woordenspammer.component';
import {SuggereerderComponent} from './paginas/suggereerder/suggereerder.component';
import {FeedbackComponent} from './paginas/feedback/feedback.component';
import {BulkGeneratorComponent} from './paginas/bulk-generator/bulk-generator.component';
import {OverDezeAppComponent} from './paginas/over-deze-app/over-deze-app.component';

const routes: Routes = [
  {path: '', component: TitelgeneratorComponent},
  {path: 'woordenspammer', component: WoordenspammerComponent},
  {path: 'suggereerder', component: SuggereerderComponent},
  {path: 'bulkgenerator', component: BulkGeneratorComponent},
  {path: 'overdezeapp', component: OverDezeAppComponent},
  {path: 'feedback', component: FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TitelmakerRoutingModule { }
