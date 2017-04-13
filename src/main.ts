import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ThundermapsModule } from './app/thundermaps.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const platform = platformBrowserDynamic();
platformBrowserDynamic().bootstrapModule(ThundermapsModule);
