import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {SignIn} from './app/sign-in';

bootstrapApplication(SignIn, appConfig)
  .catch((err) => console.error(err));
