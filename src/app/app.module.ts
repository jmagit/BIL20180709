import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyCoreModule, LoggerService, ERROR_LEBEL } from '../my-core';
import { ComunesModule } from './comunes/comunes.module';

@NgModule({
  declarations: [
    AppComponent
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
