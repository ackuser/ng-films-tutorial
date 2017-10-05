import { Component, OnInit } from '@angular/core';
import { FilmService } from './../../services/film.service';

@Component({
  selector: 'film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {

  genders: string[] = ['Comedia', 'Terror', 'Acción', 'Aventura']

constructor(private filmService: FilmService){}
  ngOnInit() {
  }


  save(film) {
    debugger
  this.filmService.addFilm(film);
  return false;
  }
}
