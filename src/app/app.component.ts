import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { views } from './app-nav-views';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	views = views;

	constructor(public router: Router){}

}
