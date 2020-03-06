import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}

  login(payload:any): Observable<any> {
    return this.http.post<any>('http://phpstack-304562-945735.cloudwaysapps.com/crm/api/authentication/login', payload)
  }

  brandList(): Observable<any> {
    return this.http.get<any>('http://phpstack-304562-945735.cloudwaysapps.com/crm/api/brand/details')
  }
}
