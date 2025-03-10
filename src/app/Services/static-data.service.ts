import { Injectable } from '@angular/core';
import { Product } from '../Models/productModel/product';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

 
prdList:Product[]
prd:Product|null=null;
filterList:Product[]=[]
  constructor() { 
    this.prdList=[
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
  }
  getAllProducts():Product[]{
    return this.prdList;
  }
  getByCategory(CNM:string)
  {
    return this.filterList=this.prdList.filter((p)=>p.category==CNM)
  }
  getProductById(prdId:number):Product|null{
    this.prd=this.prdList.find((i)=>i.id===prdId) || null
    return this.prd
  }
  postProduct(product:Product)
  {
     this.prdList.push(product)
  }
  deleteById(pId:number)
  {
    let product=this.prdList.find((p)=>p.id==pId);
    let index=this.prdList.indexOf(product as Product)
    this.prdList.splice(index,1);
  }
  updateById(pId:number,p:Product)
  {
    let product=this.prdList.find((p)=>p.id==pId);
    let index=this.prdList.indexOf(product as Product)
    this.prdList.splice(index,1,p)

  }

}


