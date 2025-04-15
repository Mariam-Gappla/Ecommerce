import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../Services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {
  userorders: any[] = [];
  totalprice: number = 0;
  private lastUsername: string | null = null; // تخزين آخر اسم مستخدم

  constructor(private order: OrdersService) {}

  loadOrders(username: string) {
    this.order.getOrderbyusername(username).subscribe((data) => {
      if (data.length > 0) {
        this.userorders = data[0].items;
        this.totalprice = data[0].totalprice;
      } else {
        console.log("No orders found for this user.");
      }
    }, error => {
      console.error("Error fetching orders:", error);
    });
  }
  ngOnInit(): void {
    setInterval(() => {
      const username = localStorage.getItem("username");

      if (username && username !== this.lastUsername) {
        this.lastUsername = username;
        this.loadOrders(username);
      }
    }, 3000); // يفحص كل 3 ثوانٍ إذا كان هناك تغيير
  }
  
  
   
}
