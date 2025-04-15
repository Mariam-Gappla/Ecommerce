import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone:true
})
export class HeaderComponent implements OnInit{
role:any;
isopen:boolean=false;
constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    // تأكد من أن الكود يعمل في المتصفح فقط
    if (isPlatformBrowser(this.platformId)) {
      this.role = localStorage.getItem('role');
    }
  }
  toggleMenu(){
    this.isopen=!this.isopen;
  }
}


