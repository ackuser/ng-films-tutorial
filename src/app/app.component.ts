import { Component } from '@angular/core';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  films: any[];

  num: number = 0
  showCounter: boolean = true

  constructor(private filmService: FilmService) { //<- Inyectamos la instancia del servicio y declaramos el campo privada filmService
    this.films = this.filmService.films;
  }

  remove(film) {
    if (window.confirm(`¿Seguro que quiere borrar la pelicula ${film.name}?`)){
      this.filmService.removeFilm(film);
      this.films = this.filmService.films;
    }
  }

  increment() {
    this.num++;
  }


  addMenInBlackII(){
    this.films.push({
      name: 'Men in Black II',
      gender: 'Action',
      language: 'English',
      valoracion: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt0120912/'
    });
  }


}
