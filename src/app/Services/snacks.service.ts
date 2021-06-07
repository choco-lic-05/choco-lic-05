import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { snacksArr } from '../Models/snacks.model';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {

  constructor(private HttpClient:HttpClient) { }

  getSnackData():Observable<snacksArr[]>{
    return this.HttpClient.get<snacksArr[]>('http://localhost:3000/snacks');
  }

  getSnacksDataWithId(id):Observable<snacksArr>{
    return this.HttpClient.get<snacksArr>('http://localhost:3000/snacks/'+id)
  }
}
