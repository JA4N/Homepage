import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //Scroll top by refresh
  window.onload = function() {
    setTimeout (function () {
     scrollTo(0,0);
    }, 100); //100ms timeout
   }
  
 