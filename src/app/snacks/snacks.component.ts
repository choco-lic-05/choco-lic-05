import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { snacksArr } from '../Models/snacks.model';
import { SnacksService } from '../Services/snacks.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit, OnDestroy {

  showFilterByTitle:boolean=true;

  snacksData:snacksArr[]=[];

  subscription:Subscription;

  seachTerm:string;

  minPrice:number;

  maxPrice:number;

  constructor(private snacksService:SnacksService) { }

  ngOnInit(): void {
    this.subscription = this.snacksService.getSnackData().subscribe(
      res=>{
        this.snacksData=res;
      },
      err=>{
        console.log('err in getting snacks data is',err)
      }
    )
  };

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
