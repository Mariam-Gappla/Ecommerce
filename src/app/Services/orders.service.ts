import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersUpdated = new BehaviorSubject<boolean>(false);
  constructor(private httpclient:HttpClient) { }
  addOrder(order:any):Observable<any>{
    return this.httpclient.post("http://localhost:4000/orders",order)
  }
  updateorder(orderid:any,order:any):Observable<any>{
     return this.httpclient.put(`http://localhost:4000/orders/${orderid}`,order)
  }
  getOrderbyusername(username: any): Observable<any> {
    return this.httpclient.get(`http://localhost:4000/orders?useremail=${username}`);
  }
  getOrders():Observable<any>{
    return this.httpclient.get('http://localhost:4000/orders')
  }
}
