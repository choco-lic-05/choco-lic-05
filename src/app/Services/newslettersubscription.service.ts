import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewslettersubscriptionService {

  constructor(private HttpClient:HttpClient) { }

  addNewsLetterSubscription(email):Observable<any>{
      return this.HttpClient.post("http://localhost:3000/users",email)
  }
}
