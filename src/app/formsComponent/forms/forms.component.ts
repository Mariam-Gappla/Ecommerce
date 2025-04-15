import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../../Services/static-data.service';
import { Product } from '../../Models/productModel/product';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DynamicDataService } from '../../Services/dynamic-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  imports: [FormsModule,HttpClientModule],
  providers:[DynamicDataService],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  standalone:true
})
export class FormsComponent implements OnInit{
  productlength:number=0;
  selectedItem:number=0;
  product:any={}
constructor(private dynamicData:DynamicDataService,private router:Router,private activeRoute:ActivatedRoute)
{
this.selectedItem=Number(activeRoute.snapshot.paramMap.get('id'));
}
ngOnInit(): void {
  if(this.selectedItem)
    {
      this.dynamicData.getProductById(this.selectedItem).subscribe(prd=>{
        this.product=prd
      })
    } 
}
onFileSelected(event: any) {
  const file = event.target.files[0];

  if (file) {
    const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = () => {
    this.product.thumbnail  = reader.result as string; 
  };

  reader.readAsDataURL(file);
  }
}
Edit()
{
  console.log(this.product)
  this.dynamicData.updateProduct(this.selectedItem,this.product).subscribe((pro)=>{
    this.router.navigate(['/products'])
  })
}
Addproduct()
{
  this.dynamicData.addProduct(this.product).subscribe((prd)=>{
  this.router.navigate(['/products'])
  });
}



}
