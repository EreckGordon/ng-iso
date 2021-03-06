import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from './shared/custom-material-module/index';

import { routes } from './app.routing';
import { NotFound404Component } from './features/not-found404.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { BlogModule } from './features/blog/index';

@NgModule({
  declarations: [
  	NotFound404Component,
  	HomeComponent,
  	AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-iso'}),
    CustomMaterialModule,
    BlogModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: false, initialNavigation: 'enabled' }), 
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CustomMaterialModule,
    RouterModule
  ]
})
export class AppCommonModule { }
