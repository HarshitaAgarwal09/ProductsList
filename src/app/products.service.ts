import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IProduct} from './Product';
import {filter, map,} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
	Prods: IProduct[] = [];
	private _url = "/assets/data/product.json";
  constructor(private http:HttpClient) {  	
  }

  getProducts(): Observable<IProduct[]>{
  	return this.http.get<IProduct[]>(this._url);

  }
  getProduct( id:number): Observable<IProduct[]>{
  of(this.http.get<IProduct[]>(this._url).pipe(find(product1 => product1.id === id)));
  return;
  }
}