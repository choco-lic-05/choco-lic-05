import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { hinge, opacity, slideright } from '../animation';
import { AddtocartService } from '../Services/addtocart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations:[opacity,slideright,hinge]
})
export class CartComponent implements OnInit {

  productsAddedToCart:any;

  constructor(private CartDS:AddtocartService,private toastr:ToastrService) { }
  ngOnInit(): void {
    this.productsAddedToCart = (this.CartDS.getTheProductsInCart())
  }

  deleteItem(ind){
    this.CartDS.deleteProductFromCart(ind);
    this.toastr.warning('','Removed from the Cart 😓')
  }
  
}


