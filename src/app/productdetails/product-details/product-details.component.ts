import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';
import { Product } from '../../Models/productModel/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  standalone:true
})
export class ProductDetailsComponent implements OnInit{
RecivedId:number=0;
productDetails: Product | null = null;
constructor(private active:ActivatedRoute,private staticdata:StaticDataService){}
ngOnInit() {
  this.RecivedId = Number(this.active.snapshot.paramMap.get('id'));
  this.productDetails = this.staticdata.getProductById(this.RecivedId);
}


}
