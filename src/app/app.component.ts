import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public films: any[] = [
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

    num: number = 0
    showCounter: boolean = true
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

    remove(film) {
        if (window.confirm(`¿Seguro que quiere borrar la pelicula ${film.name}?`)){
            this.films = this.films.filter((data) => data.name !== film.name);
        }
    }

}
