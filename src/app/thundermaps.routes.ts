import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Heroes3Component } from './heroes3/heroes3.component';
import { Heroes4Component } from './heroes4/heroes4.component';
import { LinksComponent } from './links/links.component';
import { Heroes5Component } from './heroes5/heroes5.component';
import { PairsComponent } from 'ng2pairs';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroes3', component: Heroes3Component },
  { path: 'heroes4', component: Heroes4Component },
  { path: 'heroes5', component: Heroes5Component },
  { path: 'pairs', component: PairsComponent },
  { path: 'links', component: LinksComponent },
  { path: '**', component: HomeComponent }
];
