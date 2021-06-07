import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { opacity } from '../animation';
import { fruitsvegitablesArr } from '../Models/fruits-vegitables.model';
import { FruitsVegitablesService } from '../Services/fruits-vegitables.service';

@Component({
  selector: 'app-fruits-vegitables',
  templateUrl: './fruits-vegitables.component.html',
  styleUrls: ['./fruits-vegitables.component.css']
})
export class FruitsVegitablesComponent implements OnInit,OnDestroy {

  showFilterByTitle:boolean=true

  fruitsVegetablesData:fruitsvegitablesArr[]=[];

  subscription:Subscription;

  seachTerm:string;

  minPrice:number;

  maxPrice:number;

  constructor(private frObj:FruitsVegitablesService,private router:Router) { }

  ngOnInit(): void {
    this.subscription = this.frObj.getFruitsAndVegitables().subscribe(
      products=>{
        this.fruitsVegetablesData=products;
      },  
      err=>{
        console.log("error is",err)
      }
    )
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe()
  }

}
