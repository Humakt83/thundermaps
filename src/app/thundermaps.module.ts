import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThundermapsComponent } from './thundermaps.component'
import { ROUTES } from './thundermaps.routes';
import { Heroes3Component } from './heroes3/heroes3.component';
import { HomeComponent } from './home/home.component';
import { Heroes3MapService } from './heroes3/heroes3map.service';
import 'rxjs/Rx';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal/modal.directive';
import { Heroes4Component } from './heroes4/heroes4.component';
import { Heroes4MapService } from './heroes4/heroes4map.service';
import { H4MapComponent } from './heroes4/h4map.component';

@NgModule({
    declarations: [ModalComponent, ModalDirective, ThundermapsComponent, Heroes3Component, HomeComponent, Heroes4Component, H4MapComponent],
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(ROUTES, { useHash: true })],
    bootstrap: [ThundermapsComponent],
    providers: [HttpModule, Heroes3MapService, Heroes4MapService]
})
export class ThundermapsModule {}