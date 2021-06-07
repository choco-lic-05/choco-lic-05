import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { opacity, popup } from '../animation';
import { AddtocartService } from '../Services/addtocart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations:[opacity,popup]
})
export class ProductCardComponent implements OnInit {

  displayImage2:boolean=false;

  displayButton:boolean=false;

  discount:number;

  productAddedToCart:boolean;

  constructor(private Router:Router,private addToCartDS:AddtocartService,private toastr:ToastrService) { }

  ngOnInit(): void {
  
    this.discount=((this.productData.price-this.productData.sale_price)*100)/this.productData.price;
  }

  //recieving data from parent
  @Input() productData:any;


    onSelectProduct(id){
      if(this.Router.url === '/snacks'){
        this.Router.navigateByUrl('snacks/'+id)
      }
      if(this.Router.url === '/fruits-vegitables'){
        this.Router.navigateByUrl('fruits-vegitables/'+id)
      }
    }

    addToCart(){
      this.productAddedToCart = this.addToCartDS.newProductAddedToCart(this.productData)
      if(this.productAddedToCart){
      this.toastr.success('Product Added To Cart😊');
      }
      else this.toastr.info('Product Already Exists in Cart 😙');
    }

}
