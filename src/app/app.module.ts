import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FilmComponent } from '../shared/film.component'; // <-- Importamos el componente
import { MyShadowDirective } from '../shared/myShadow.directive'; // <-- Importamos la directiva

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    MyShadowDirective // <-- Declaramos la directiva
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
