import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TitelmakerRoutingModule } from './titelmaker-routing.module';
import { TitelmakerComponent } from './titelmaker.component';
import { TitelgeneratorComponent } from './paginas/titelgenerator/titelgenerator.component';
import {ServicesModule} from './services/services.module';
import {WoordenspammerComponent} from './paginas/woordenspammer/woordenspammer.component';
import { FeedbackComponent } from './paginas/feedback/feedback.component';
import { SuggereerderComponent } from './paginas/suggereerder/suggereerder.component';
import { BulkGeneratorComponent } from './paginas/bulk-generator/bulk-generator.component';
import { OverDezeAppComponent } from './paginas/over-deze-app/over-deze-app.component';
import {GebruikstipsComponent} from './paginas/gebruikstips/gebruikstips.component';

@NgModule({
  declarations: [
    TitelmakerComponent,
    TitelgeneratorComponent,
    WoordenspammerComponent,
    SuggereerderComponent,
    BulkGeneratorComponent,
    GebruikstipsComponent,
    FeedbackComponent,
    OverDezeAppComponent
  ],
  imports: [
    BrowserModule,
    TitelmakerRoutingModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [TitelmakerComponent]
})
export class TitelmakerModule { }
