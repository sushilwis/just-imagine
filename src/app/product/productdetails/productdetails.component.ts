import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/helper/apiService/data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {

  product_id: string;
  product:any = [];

  constructor(private route:ActivatedRoute, private data:DataService) { }

  ngOnInit() {
    
  }

}
