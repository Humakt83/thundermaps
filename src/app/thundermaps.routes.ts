import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Heroes3Component } from './heroes3/heroes3.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroes3', component: Heroes3Component },
  { path: '**', component: HomeComponent }
];