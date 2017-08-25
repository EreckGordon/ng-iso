/* tslint:disable no-console */
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'ts-helpers';
//import 'rxjs/Rx';

import * as express from 'express';
import * as path from 'path';
const compression = require('compression');

import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import { ngExpressEngine } from '@nguniversal/express-engine';

enableProdMode();

const AppServerModuleNgFactory = require('./dist-server/main.bundle').AppServerModuleNgFactory;


const app = express();
const baseUrl = `http://localhost:8000`;
const bodyParser = require('body-parser');


app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'src');


app.use(compression());
app.use('/', express.static('dist', { index: false }));
app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes: string[] = [
  '',
  'about',
  'blog/*',
  '*'
];

routes.forEach(route => {
  app.get('/' + route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/index', {
      req: req,
      res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});


app.listen(8000, () => {
  console.log(`Listening at ${baseUrl}`);
});

