import { Component, Input, OnChanges,Output, ChangeDetectorRef, OnInit } from '@angular/core';
import { Product } from '../../Models/productModel/product';
import { ShadowDirective } from '../../Directives/shadowDirective/shadow.directive';
import { NgClass, UpperCasePipe } from '@angular/common';
import { SliceWordsPipe } from '../../pipes/slice/slice-words.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ButtonComponentComponent } from '../../ButtonComponent/button-component/button-component.component';
import { faTrash, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { StaticDataService } from '../../Services/static-data.service';
@Component({
  selector: 'app-main-content',
  imports: [ShadowDirective,NgClass,UpperCasePipe,SliceWordsPipe,FormsModule,ButtonComponentComponent,FontAwesomeModule,RouterModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  standalone:true
})
export class MainContentComponent implements OnChanges,OnInit{
  isPopupOpen = false;
products:Product[]=[
  new Product(1,"Essence Mascara Lash Princess","The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.", "beauty", 9.99,7.17,4.94,1,"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"),
  new Product(2,"Eyeshadow Palette with Mirror","The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.","beauty",19.99,5.5,3.28,44,"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"),
  new Product(3,"Powder Canister","The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.","beauty",14.99,18.14,3.82,59,"https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"),
  new Product(4,"Red Lipstick","The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.","beauty",12.99,19.03,2.51,68,"https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"),
  new Product( 5,"Red Nail Polish","The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.","beauty",8.99,2.46,3.91,71, "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"),
  new Product(6,"Gucci Bloom Eau de","Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.","fragrances",79.99,8.9,2.69,93,"https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png"),
  new Product(7,"Annibale Colombo Bed","The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.","furniture",1899.99,0.29,4.14,47,"https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png"),
  new Product(8,"Annibale Colombo Sofa","The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.","furniture",2499.99,18.54,3.08,16, "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png"),
  new Product( 9,"Bedside Table African Cherry","The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.","furniture",299.99,9.58, 4.48,16,"https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png"),
  new Product(10,"Apple","Fresh and crisp apples, perfect for snacking or incorporating into various recipes.","groceries",1.99,1.97,2.96,9,"https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"),
  new Product(11,"Beef Steak","High-quality beef steak, great for grilling or cooking to your preferred level of doneness.","groceries",12.99,17.99,2.83,96,"https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"),
  new Product(12,"Cat Food","Nutritious cat food formulated to meet the dietary needs of your feline friend.","groceries",8.99,9.57,2.88,13,"https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png")
]
filteredList:Product[]=this.products
@Input() recivedid:string="";
selectedProduct: any = {};
productPrice:number=0;
faTrash:any;
faEdit:any;
faInfoCircle:any;
finalproductprice:number=0
prd?:Product
constructor(private staticData:StaticDataService,private cdRef: ChangeDetectorRef) {
 this.faTrash = faTrash;
this.faEdit = faEdit;
this.faInfoCircle = faInfoCircle;
}
ngOnInit(): void {
  this.filteredList=this.staticData.getAllProducts()
}
filterProducts():void
{
  
 this.filteredList=this.staticData.getByCategory(this.recivedid) 
}
ngOnChanges(): void {
  this.filterProducts()
}
delelteProduct(id:number)
{
  alert(id);
this.staticData.deleteById(id)
}

calculatePrice(count:string, prd: Product):void{
  if (Number(count) <= Number(prd.stock)) {
    this.productPrice += Number(count) * prd.price;
    console.log(this.productPrice)
    prd.stock -= Number(count);
  } else {
    alert("not available this quantity");
  }
}
openPopup(item: any) {
  this.selectedProduct = item 
  this.isPopupOpen = true;
}
closePopup() {
  this.isPopupOpen = false;
}
saveChanges() {
  this.closePopup(); // إغلاق الـ popup بعد الحفظ
}
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
Productupdated(id:number){


this.staticData.updateById(id,this.filteredList[this.selectedProduct.id-1])
this.closePopup()
}
}
