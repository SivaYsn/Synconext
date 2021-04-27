import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url: string = 'https://narayan.iqnext.io/places/';
  
  constructor(private http: HttpClient) {}
  
  // service to get the data
  getUsers(): Observable<any> {
     return this.http.get<Users[]>(this.url);
  }
}
