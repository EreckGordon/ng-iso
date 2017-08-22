import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import { AppCommonModule } from './app.common.module';


@NgModule({
  imports: [
    AppCommonModule,
    NoopAnimationsModule,
    ServerModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}