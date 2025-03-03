import { ApplicationRef, NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ROUTES } from './thundermaps.routes';
import 'rxjs';
import { MapService } from './map/map.service';
import { SortService } from './sort/sort.service';
import { provideHttpClient } from '@angular/common/http';
import { ThundermapsComponent } from './thundermaps.component';
import { HomeComponent } from './home/home.component';
import { SortComponent } from './sort/sort.component';
import { SortPipe } from './sort/sort.pipe';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal/modal.directive';
import { LinksComponent } from './links/links.component';
import { Heroes3Component } from './heroes3/heroes3.component';
import { Heroes4Component } from './heroes4/heroes4.component';
import { Heroes5Component } from './heroes5/heroes5.component';
import { H4MapComponent } from './heroes4/h4map.component';
import { PairsModule } from 'ng2pairs';

@NgModule({
    bootstrap: [ThundermapsComponent],
    imports: [BrowserModule, FormsModule, PairsModule.forRoot(), RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })],
    providers: [MapService, SortService, provideHttpClient()],
    declarations: [ThundermapsComponent, HomeComponent, SortComponent, 
        SortPipe, ModalComponent, ModalDirective, LinksComponent, Heroes3Component, 
        Heroes4Component, Heroes5Component, H4MapComponent]
})
export class ThundermapsModule {

    constructor(public appRef: ApplicationRef) { }
}