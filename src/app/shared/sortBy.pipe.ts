import { Pipe, PipeTransform } from '@angular/core'; // <- Importamos Pipe y

@Pipe({
    name: 'sortBy',
    pure: false
})
export class SortByPipe implements PipeTransform {
    transform(value: Array<any>, typeSort: String) {        
        console.log(typeSort);
        if(typeSort)
        {
            value.sort((a,b) => {
                let result = 0;
                if(a[typeSort.toString()] > b[typeSort.toString()])
                result = 1;
                else if(a[typeSort.toString()] < b[typeSort.toString()])
                result = -1;
                return result;
            });
        }
        else{
            value.sort();
        }
        return value;
    }
}
