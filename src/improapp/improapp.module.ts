import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImproappRoutingModule } from './improapp-routing.module';
import { ImproappComponent } from './improapp.component';
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
    ImproappComponent,
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
    ImproappRoutingModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [ImproappComponent]
})
export class ImproappModule { }
