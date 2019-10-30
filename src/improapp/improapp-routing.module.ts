import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImproappComponent} from './improapp.component';
import {TitelgeneratorComponent} from './paginas/titelgenerator/titelgenerator.component';
import {WoordenspammerComponent} from './paginas/woordenspammer/woordenspammer.component';
import {SuggereerderComponent} from './paginas/suggereerder/suggereerder.component';
import {FeedbackComponent} from './paginas/feedback/feedback.component';
import {BulkGeneratorComponent} from './paginas/bulk-generator/bulk-generator.component';
import {OverDezeAppComponent} from './paginas/over-deze-app/over-deze-app.component';
import {GebruikstipsComponent} from './paginas/gebruikstips/gebruikstips.component';

const routes: Routes = [
  {path: '', component: TitelgeneratorComponent},
  {path: 'woordenspammer', component: WoordenspammerComponent},
  {path: 'suggereerder', component: SuggereerderComponent},
  {path: 'bulkgenerator', component: BulkGeneratorComponent},
  {path: 'gebruikstips', component: GebruikstipsComponent},
  {path: 'overdezeapp', component: OverDezeAppComponent},
  {path: 'feedback', component: FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ImproappRoutingModule { }
