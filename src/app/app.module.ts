import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ThundermapsComponent } from './thundermaps/thundermaps.component'

@NgModule({
    declarations: [],
    imports: [BrowserModule, HttpModule, FormsModule],
    bootstrap: [ThundermapsComponent],
    providers: [HttpModule, ]
})
export class AppModule {}