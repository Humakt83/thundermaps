import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Heroes3Component } from './heroes3/heroes3.component';
import { Heroes4Component } from './heroes4/heroes4.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroes3', component: Heroes3Component },
  { path: 'heroes4', component: Heroes4Component },
  { path: '**', component: HomeComponent }
];