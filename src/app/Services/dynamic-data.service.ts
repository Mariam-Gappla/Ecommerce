import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class DynamicDataService {

  constructor(private httpclient:HttpClient) { }
  getAllProducts():Observable<any>
  {
    return this.httpclient.get('http://localhost:2000/products');
  }
  getProductById(prdId:number):Observable<any>
  {
    return this.httpclient.get(`http://localhost:2000/products/${prdId}`)
  }
  addProduct(prd:any): Observable<any> {
    

    return this.httpclient.post("http://localhost:2000/products", prd); // إرسال الطلب للـ Backend
  }
  
  deleteProduct(prdId:number):Observable<void>
  {
   return this.httpclient.delete<void>(`http://localhost:2000/products/${prdId}`);
  }
  updateProduct(prdId:number,prd:any):Observable<any>
  {
    return this.httpclient.put(`http://localhost:2000/products/${prdId}`,prd);
  }
  filterProductsByCategory(cat:any):Observable<any>
  {
    return this.httpclient.get(`http://localhost:2000/products?category=${cat}`)
  }

}
