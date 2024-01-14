import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

//Sử dụng localStorage
import 'localstorage-polyfill'
global['localStorage'] = localStorage;

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
