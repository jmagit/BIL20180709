import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyCoreModule, LoggerService, ERROR_LEVEL } from '../my-core';
import { ComunesModule } from './comunes/comunes.module';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { NotificationComponent } from './notification/notification.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { environment } from '../environments/environment';
import { PersonasViewModelService, PersonasDAOViewModelService } from './personas/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    NotificationComponent,
    CalculadoraComponent,
    DinamicoComponent,
    PERSONAS_COMPONENT,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    MyCoreModule, ComunesModule
  ],
  providers: [ LoggerService,
    {provide: ERROR_LEVEL, useValue: environment.errorLevel },
    {provide: PersonasViewModelService, useClass: PersonasDAOViewModelService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
