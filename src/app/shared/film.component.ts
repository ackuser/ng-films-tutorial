import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FilmComponent {
    @Input('data') public data: any
    @Output() public onRemove = new EventEmitter()

    remove() {
        console.log("Eliminar film");
        this.onRemove.emit(this.data);
    }
}
