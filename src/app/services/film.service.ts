import { Injectable } from '@angular/core';

@Injectable()
export class FilmService {

  private _films: any[] = [
      {
          name: 'spectre 007',
          gender: 'Aventura',
          language: 'Spanish',
          valoracion: 5,
          image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbUrl: 'http://www.imdb.com/title/tt2379713/'
      },
      {
          name: 'solo en casa',
          // gender: 'Comedia',
          valoracion: 1,
          image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmQzYjEzYTQtNzNhZi00NmEwLThiZDMtMWYyNjRmZWY0ZTdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbUrl: 'http://www.imdb.com/title/tt0099785/'
      },
      {
          name: 'mascotas',
          gender: 'Comedia',
          language: 'English',
          valoracion: 5,
          image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbUrl: 'http://www.imdb.com/title/tt2709768/'
      }
  ]

    get films() {
      return this._films;
    }
    set films(films) {
      this._films = films;
    }
    removeFilm(film) {
      this._films = this._films.filter((data) => data.name !== film.name);
    }
  }
