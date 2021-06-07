import { Component } from '@angular/core';
import { AddtocartService } from './Services/addtocart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'GroceryApp';

  constructor(private CartDS:AddtocartService){}

  numberOfProductsAdded:number=0;

  numberOfProducts(){
    this.numberOfProductsAdded = this.CartDS.getNumberofProductsInCart()
  }
}
