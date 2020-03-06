import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/helper/apiService/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products:any = [];

  constructor(private router: Router, private data:DataService) { }

  ngOnInit() {
    this.showProducts();
  }

  showProducts() {
    this.data.productList().subscribe(
      res => {
        if(res.status == true){
          this.products = res.data;
          console.log(this.products);
        } else {
          console.log("No response");
        }
      });
  }
}
