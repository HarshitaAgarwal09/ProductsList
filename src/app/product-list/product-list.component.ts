import { Component, OnInit } from '@angular/core';
import {  ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	Products = [] ;

   constructor(private myservice:ProductsService){}

  ngOnInit() {
  	this.myservice.getProducts().subscribe(products => this.Products = products);
    }
}
