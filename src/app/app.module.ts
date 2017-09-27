import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FilmComponent } from './shared/film.component'; // <-- Importamos el componente
import { MyShadowDirective } from './shared/myShadow.directive';
import { CounterComponent } from './counter/counter.component'; // <-- Importamos la directiva
import { CapitalizeFirstPipe } from './shared/capitalize-first.pipe';
import { SortByPipe } from './shared/sortBy.pipe';
import { TodayComponent } from './today/today.component'; // <-- Importamos el pipe

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MaterialModule } from '@angular/material';
import {MdButtonModule, MdCheckboxModule, MdCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    MyShadowDirective,
    CounterComponent,
    CapitalizeFirstPipe,
    SortByPipe,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MaterialModule
    MdButtonModule, MdCheckboxModule, MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
