import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { SizerComponent } from './components/sizer/sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { VALIDACIONES_DIRECTIVES } from './directives/validaciones.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent,
    VALIDACIONES_DIRECTIVES, ],
  exports: [ PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent,
    VALIDACIONES_DIRECTIVES ]
})
export class MyCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: MyCoreModule) {
    if (parentModule) {
      const msg = `ModuleName has already been loaded.
        Import ModuleName once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
