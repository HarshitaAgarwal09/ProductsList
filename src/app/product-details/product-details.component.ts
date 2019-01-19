import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../products.service';
import {IProduct} from '../Product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
	product;
  Prod : IProduct[] = [];
	id:number;
  constructor(private productservice: ProductsService, private route:ActivatedRoute) { }

  ngOnInit() {  	
 	 this.getProduct();
  }

  getProduct(){
	this.id = +this.route.snapshot.paramMap.get('id');
  this.productservice.getProducts().subscribe(product1 => this.Prod = product1);
  //this.product = this.Prod[this.id-1];
  //console.log(this.product);
  }
}
