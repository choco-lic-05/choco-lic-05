import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  productsAddedToCart: any[] = []

  show: boolean

  count: number

  constructor() { }

  newProductAddedToCart(newProduct) {
    if (this.productsAddedToCart.length >= 1) {
      if (this.check(newProduct)) {
        this.productsAddedToCart.push(newProduct)
        return true
      }
      else return false
    }
    else this.productsAddedToCart.push(newProduct); return true
  }

  deleteProductFromCart(index) {
    this.productsAddedToCart.splice(index, 1)
  }

  check(newProduct){
    for (let p of this.productsAddedToCart) {
      if (p.name === newProduct.name) {
        this.count = 1
        break;
      }
      else this.count = 0
    }
    if (this.count == 0) return true
    else return false

  }

  getTheProductsInCart() {
    return this.productsAddedToCart;
  }

  getNumberofProductsInCart() {
    return this.productsAddedToCart.length
  }
}
