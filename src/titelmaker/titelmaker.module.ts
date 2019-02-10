import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TitelmakerRoutingModule } from './titelmaker-routing.module';
import { TitelmakerComponent } from './titelmaker.component';
import { TitelgeneratorComponent } from './titelgenerator/titelgenerator.component';
import {ServicesModule} from './services/services.module';

@NgModule({
  declarations: [
    TitelmakerComponent,
    TitelgeneratorComponent,
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
