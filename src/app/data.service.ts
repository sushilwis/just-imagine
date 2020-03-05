import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  requestHeader: any = new HttpHeaders();

  constructor(private http:HttpClient) {
    //this.requestHeader.append("Accept", 'application/json');
    this.requestHeader.append('Content-Type', 'application/json');
  }

  login(input:any): Observable<any> {
    return this.http.post<any>('http://phpstack-304562-945735.cloudwaysapps.com/crm/api/authentication/login', input, {headers: this.requestHeader})
  }

  brandList(): Observable<any> {
    return this.http.get<any>('http://phpstack-304562-945735.cloudwaysapps.com/crm/api/brand/details', {headers: this.requestHeader})
  }

  brandDetails(input:any): Observable<any> {
    return this.http.get<any>('http://phpstack-304562-945735.cloudwaysapps.com/crm/api/brand/details/'+input.brand_id, {headers: this.requestHeader})
  }

  categoryList(): Observable<any> {
    return this.http.get<any>('http://phpstack-304562-945735.cloudwaysapps.com/crm/api/category/details', {headers: this.requestHeader})
  }

  productList(): Observable<any> {
    return this.http.get<any>('http://phpstack-304562-945735.cloudwaysapps.com/crm/api/product/details', {headers: this.requestHeader})
  }

  productDetails(input:any): Observable<any> {
    return this.http.get<any>('http://phpstack-304562-945735.cloudwaysapps.com/crm/api/product/details/'+input.product_id, {headers: this.requestHeader})
  }

  productEdit(input:any): Observable<any> {
    return this.http.put<any>('http://phpstack-304562-945735.cloudwaysapps.com/crm/api/product/edit', input, {headers: this.requestHeader})
  }
}
