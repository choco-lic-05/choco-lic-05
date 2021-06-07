import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxPrice'
})
export class MaxPricePipe implements PipeTransform {

  transform(products:any[], maxPrice:number): any[] {
    if(!products || !maxPrice){
      return products;
    }
    else{
      return products.filter(productObj=>
        productObj.sale_price < maxPrice
      );
    }
  }  

}
