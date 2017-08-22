import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomMaterialModule } from './shared/custom-material-module/index';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-iso'}),
    CustomMaterialModule 
  ],
  providers: [],
  bootstrap: [],
  exports: [CustomMaterialModule]
})
export class AppCommonModule { }
