import { Component} from '@angular/core';

@Component({
  selector: 'today',
  templateUrl: './today.component.html'
})
export class TodayComponent {

    sysdate = new Date();
    toggle = true;

    get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }

}
