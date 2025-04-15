import { Component } from '@angular/core';
import { MainContentComponent } from '../../maincontentComponent/main-content/main-content.component';
import { Category } from '../../Models/categoryModel/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-master-main-content-component',
  imports: [MainContentComponent,FormsModule],
  templateUrl: './master-main-content-component.component.html',
  styleUrl: './master-main-content-component.component.css',
  standalone:true
})
export class MasterMainContentComponentComponent {
category:Category[]=[
  {id:1,name:"beauty"},
  {id:2,name:"fragrances"},
  {id:3,name:"furniture"},
  {id:4,name:"groceries"}
]
producttotalprice:number=0
selectedItem:string="beauty";
handleClick(value:any):void{
  this.selectedItem=value;
}
}
