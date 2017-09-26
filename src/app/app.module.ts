import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FilmComponent } from './shared/film.component'; // <-- Importamos el componente
import { MyShadowDirective } from './shared/myShadow.directive';
import { CounterComponent } from './counter/counter.component'; // <-- Importamos la directiva
// import { CapitalizeFirstPipe } from './shared/capitalize-first.pipe';
import { TodayComponent } from './today/today.component'; // <-- Importamos el pipe

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    MyShadowDirective,
    CounterComponent,
    // CapitalizeFirstPipe,
    TodayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
