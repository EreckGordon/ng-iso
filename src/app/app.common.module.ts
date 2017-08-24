import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from './shared/custom-material-module/index';

import { routes } from './app.routing';
import { NotFound404Component } from './not-found404.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogModule } from './blog/index';

@NgModule({
  declarations: [
  	NotFound404Component,
  	HomeComponent,
  	AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-iso'}),
    RouterModule.forRoot(routes, { useHash: false, initialNavigation: 'enabled' }),
    CustomMaterialModule,
    BlogModule 
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CustomMaterialModule,
    RouterModule
  ]
})
export class AppCommonModule { }
