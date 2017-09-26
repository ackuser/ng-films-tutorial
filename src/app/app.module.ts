import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FilmComponent } from './shared/film.component'; // <-- Importamos el componente
import { MyShadowDirective } from './shared/myShadow.directive';
import { CounterComponent } from './counter/counter.component'; // <-- Importamos la directiva

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    MyShadowDirective,
    CounterComponent // <-- Declaramos la directiva
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
