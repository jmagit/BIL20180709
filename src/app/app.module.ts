import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyCoreModule, LoggerService, ERROR_LEBEL } from '../my-core';
import { ComunesModule } from './comunes/comunes.module';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { NotificationComponent } from './notification/notification.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DinamicoComponent } from './dinamico/dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    NotificationComponent,
    CalculadoraComponent,
    DinamicoComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MyCoreModule, ComunesModule
  ],
  providers: [ LoggerService,
    {provide: ERROR_LEBEL, useValue: 5 },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
