import { Component } from '@angular/core';
@Component({
    selector: 'film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FilmComponent {

    //declaramos la propiedad/campo film en la clase
    public data: any = {
        name: 'Spectre 007',
        gender: 'Aventura',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbUrl:'http://www.imdb.com/title/tt2379713/'
    }


    remove() {
    alert('Eliminar');
    }
}
