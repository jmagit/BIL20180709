import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { SizerComponent } from './components/sizer/sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent, ],
  exports: [ PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent ]
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
