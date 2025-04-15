import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';
import { Product } from '../../Models/productModel/product';
import { DynamicDataService } from '../../Services/dynamic-data.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe, NgClass } from '@angular/common';
import { ButtonComponentComponent } from '../../ButtonComponent/button-component/button-component.component';
import { OrdersService } from '../../Services/orders.service';

@Component({
  selector: 'app-product-details',
  imports: [HttpClientModule,NgClass,ButtonComponentComponent],
  providers:[DynamicDataService,OrdersService,JsonPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  standalone:true
})
export class ProductDetailsComponent implements OnInit{
RecivedId:number=0;
productDetails:any={};
totalprice:number=0;
prds:any[]=[];
items:any[]=[];
order:any[]=[];
productPrice:number=0;
constructor(private active:ActivatedRoute,private dynamicData:DynamicDataService,private userorder:OrdersService,private router:Router){}
ngOnInit() {
  this.RecivedId = Number(this.active.snapshot.paramMap.get('id'));
  this.dynamicData.getProductById(this.RecivedId).subscribe(prd=>{
    this.productDetails=prd;
    console.log(this.productDetails)
    console.log(this.productDetails.thumbnail)
  })
}
calculatePrice(count:string, prd:any):void{
console.log("mariam")
  console.log(`userorder:${prd.thumbnail}`);
  let orderproduct={
    "productName":prd.title,
    "productimage":prd.thumbnail,
    "Quantity":count,
    "price":(Number(count)*prd.price)
  }
  if ((Number(count) <= Number(prd.stock)) && (Number(count)>0)) {
    this.totalprice += Number(count) * prd.price;
    console.log(this.productPrice)
    prd.stock -= Number(count);
    let username=localStorage.getItem("username")
    this.userorder.getOrderbyusername(username).subscribe((data)=>{
      if(data.length==0){
        this.items.push(orderproduct)
        console.log(`items:${this.items}`)
        let order={
          "useremail":localStorage.getItem("username"),
          "items":this.items,
          "totalprice":this.items[0].price
        }
        this.userorder.addOrder(order).subscribe((res)=>{})
      }
      else
      {
        this.totalprice=0;
        this.userorder.getOrders().subscribe((res)=>{
         this.order=res
        let userorder=this.order.filter((ord)=>{
          return ord.useremail===localStorage.getItem("username")
        })
        userorder[0].items.push(orderproduct)
        console.log(`userorder:${userorder[0].items}`)
          if(userorder[0]!== undefined)
          {
            userorder[0].items.forEach((elm:any) => {
              this.totalprice+=elm.price
            });
            let order={
              "useremail":localStorage.getItem("username"),
              "items":userorder[0].items,
              "totalprice":this.totalprice
            }
            this.userorder.updateorder(userorder[0].id,order).subscribe((data)=>{
              console.log(data)
          })
          }
        })
      }
     })
     this.router.navigateByUrl('/orders')
  } else {
    alert("not available this quantity");
  }
  
  
}

}
