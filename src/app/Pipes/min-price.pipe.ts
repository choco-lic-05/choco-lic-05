import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minPrice'
})
export class MinPricePipe implements PipeTransform {

  transform(products:any[], minPrice:number): any[] {
    if(!products || !minPrice){
      return products;
    }
    else{
      return products.filter(productObj=>
        productObj.sale_price > minPrice
      );
    }

  }

}
