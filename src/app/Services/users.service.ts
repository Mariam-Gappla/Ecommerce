import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: any = {};
  islogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // ✅ تحديد القيمة الافتراضية
  data: any[] = []; // ✅ تحديد النوع المناسب

  constructor(private httpClient: HttpClient, private router: Router) {}

  getAllUsers(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/users");
  }

  getUserById(userId: number): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/users/${userId}`);
  }

  addUser(userData: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users', userData);
  }

  deleteUser(userId: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/users/${userId}`);
  }
  updateUser(userId:number,user:any):Observable<any>{
    return this.httpClient.patch(`http://localhost:3000/users/${userId}`,user)
  }
  Login(user:any) {
    this.getAllUsers().subscribe(users => {

      this.data = users; // ✅ تخزين بيانات المستخدمين بعد جلبها من السيرفر
      this.islogged.next(this.userLogged(this.data,user)); // ✅ تحديث حالة تسجيل الدخول
      
      console.log(this.islogged.getValue()); // ✅ التحقق من القيمة الفعلية

      if (this.islogged.getValue()) { // ✅ استخدام `getValue()` بدلاً من `this.islogged`
        localStorage.setItem('token', "123456");
        this.router.navigate(['/Landing']);
      } else {
        alert("Please create an account first");
        this.router.navigate(['/SignUp']);
      }
    });
  }

   userLogged(data: any[],user:any): boolean {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Email === user.email && data[i].Password === user.password) {
        localStorage.setItem("role", data[i].role);
        return true;
      }
    }
    return false;
  }
}
