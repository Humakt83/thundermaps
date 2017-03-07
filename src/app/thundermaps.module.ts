import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThundermapsComponent } from './thundermaps.component'
import { ROUTES } from './thundermaps.routes';
import { Heroes3Component } from './heroes3/heroes3.component';
import { HomeComponent } from './home/home.component';
import 'rxjs/Rx';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal/modal.directive';
import { Heroes4Component } from './heroes4/heroes4.component';
import { MapService } from './shared/map.service';
import { H4MapComponent } from './heroes4/h4map.component';
import { LinksComponent } from './links/links.component';
import { Heroes5Component } from './heroes5/heroes5.component';
import { PairsModule } from './+pairs/index';

@NgModule({
    declarations: [ModalComponent, ModalDirective, ThundermapsComponent, Heroes3Component, HomeComponent, Heroes4Component, H4MapComponent, LinksComponent, Heroes5Component],
    imports: [BrowserModule, HttpModule, FormsModule, PairsModule, RouterModule.forRoot(ROUTES, { useHash: true })],
    bootstrap: [ThundermapsComponent],
    providers: [HttpModule, MapService]
})
export class ThundermapsModule {}