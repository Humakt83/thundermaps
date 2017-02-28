import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThundermapsComponent } from './thundermaps.component'
import { ROUTES } from './thundermaps.routes';
import { Heroes3Component } from './heroes3/heroes3.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [ThundermapsComponent, Heroes3Component, HomeComponent],
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(ROUTES, { useHash: true })],
    bootstrap: [ThundermapsComponent],
    providers: [HttpModule]
})
export class ThundermapsModule {}