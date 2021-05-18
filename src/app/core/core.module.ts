
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DialogModule } from '@app/modules/ui';

import { CORE_PROVIDERS } from './providers';
import { CORE_GUARDS } from './guards';


@NgModule({
  imports: [
    DialogModule
  ],
  providers: [
    ...CORE_PROVIDERS,
    ...CORE_GUARDS
  ],
  exports: [ ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import available only in AppModule');
    }
  }
}
