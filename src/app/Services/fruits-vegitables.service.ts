import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {from, Observable } from 'rxjs';
import{fruitsvegitablesArr} from '../Models/fruits-vegitables.model';


@Injectable({
  providedIn: 'root'
})
export class FruitsVegitablesService {

  constructor(private hc:HttpClient) { }

  getFruitsAndVegitables():Observable<fruitsvegitablesArr[]>{
    return this.hc.get<fruitsvegitablesArr[]>('http://localhost:3000/fruits_vegitables')
  }
  
  getSpecificFruitsAndVegitablesData(id):Observable<fruitsvegitablesArr>{
    return this.hc.get<fruitsvegitablesArr>('http://localhost:3000/fruits_vegitables/'+id)
  }

}
