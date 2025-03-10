import { Component } from '@angular/core';
import { StaticDataService } from '../../Services/static-data.service';
import { Product } from '../../Models/productModel/product';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [FormsModule,JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  productlength:number=0
  product:Product={} as Product
constructor(private data:StaticDataService)
{
this.productlength=data.prdList.length+1
}
onFileSelected(event:any){
const input=event.target as HTMLInputElement;
const file=input.files![0];
const reader=new FileReader();
reader.onload=()=>{
  this.product.image=reader.result as string;
}
reader.readAsDataURL(file)
}
Addproduct()
{
  console.log(this.product)
  this.data.postProduct(this.product!)
}
}
