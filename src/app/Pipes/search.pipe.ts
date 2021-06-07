import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[], searchTerm:string): any[] {
    if(!products || !searchTerm){
      return products;
    }
    else{
      return products.filter(productObj=>
        productObj.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

  }
}
