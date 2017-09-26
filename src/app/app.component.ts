import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public films: any[] = [
        {
            name: 'Spectre 007',
            gender: 'Aventura',
            image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
            imdbUrl: 'http://www.imdb.com/title/tt2379713/'
        },
        {
            name: 'Solo en casa',
            // gender: 'Comedia',
            image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmQzYjEzYTQtNzNhZi00NmEwLThiZDMtMWYyNjRmZWY0ZTdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
            imdbUrl: 'http://www.imdb.com/title/tt0099785/'
        },
        {
            name: 'Mascotas',
            gender: 'Comedia',
            image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
            imdbUrl: 'http://www.imdb.com/title/tt2709768/'
        }
    ]



    remove(film) {
        if (window.confirm(`¿Seguro que quiere borrar la pelicula ${film.name}?`)){
            this.films = this.films.filter((data) => data.name !== film.name);
        }
    }

}
