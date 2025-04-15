import { Component, Input, OnChanges,Output, ChangeDetectorRef, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../Models/productModel/product';
import { ShadowDirective } from '../../Directives/shadowDirective/shadow.directive';
import { NgClass, UpperCasePipe } from '@angular/common';
import { SliceWordsPipe } from '../../pipes/slice/slice-words.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ButtonComponentComponent } from '../../ButtonComponent/button-component/button-component.component';
import { faTrash, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { DynamicDataService } from '../../Services/dynamic-data.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { time } from 'node:console';
import { OrdersComponent } from '../../orders/orders.component';
import { OrdersService } from '../../Services/orders.service';


@Component({
  selector: 'app-main-content',
  imports: [ShadowDirective,UpperCasePipe,SliceWordsPipe,FormsModule,FontAwesomeModule,RouterModule,HttpClientModule],
  templateUrl: './main-content.component.html',
  providers:[DynamicDataService,OrdersService],
  styleUrl: './main-content.component.css',
  standalone:true
})
export class MainContentComponent implements OnInit,OnChanges{
@Input() recivedid:string="";
selectedProduct: any = {};
productPrice:number=0;
totalprice:number=0;
faTrash:any;
faEdit:any;
faInfoCircle:any;
finalproductprice:number=0
prds:any[]=[];
items:any[]=[];
order:any[]=[];
role:string|null=localStorage.getItem("role");
constructor(private dynamicData:DynamicDataService,private cdRef: ChangeDetectorRef,private userorder:OrdersService) {
 this.faTrash = faTrash;
this.faEdit = faEdit;
this.faInfoCircle = faInfoCircle;
}
getAllProducts() {
  this.dynamicData.getAllProducts().subscribe(prd => {
      this.prds=prd;
  });
}


ngOnInit(): void {
  this.getAllProducts();
}
filterData()
{
  this.dynamicData.filterProductsByCategory(this.recivedid).subscribe(prd=>{
    console.log(prd)
     this.prds=prd;
  });
}
ngOnChanges(): void {
  this.filterData()
}
deletproduct(prdId:number)
{
  console.log(prdId)
  this.dynamicData.deleteProduct(prdId).subscribe(()=>{
    this.getAllProducts()
  })
}


/*
onFileSelected(event: any) {
  const input = event.target as HTMLInputElement;
  const file = input.files![0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    this.filteredList[(this.selectedProduct.id)-1].image = reader.result as string;
    this.cdRef.detectChanges();
    
    console.log(this.filteredList[this.selectedProduct.id]);
  };

  reader.readAsDataURL(file);
}
*/
}
