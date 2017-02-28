import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ThundermapsModule } from './thundermaps.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ThundermapsModule);