import { HttpClientJsonpModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DynamicDataService } from '../../Services/dynamic-data.service';

@Component({
  selector: 'app-landing',
  imports: [HttpClientJsonpModule],
  providers:[DynamicDataService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  standalone: true
})
export class LandingComponent {
images:string[];
constructor( private products:DynamicDataService)
{
  this.images=[
    "1.PNG",
    "2.PNG",
    "3.PNG",
    "4.PNG"
  ]
}
currentIndex:number=0;
intervalId:any
prd:any[]=[]
displayPre() {
  console.log(this.currentIndex);
  if (this.currentIndex>=0) {
    if(this.currentIndex==0)
    {
      this.currentIndex=0
    }
    else{
      this.currentIndex--;
    }
  }
  console.log( this.currentIndex)
}
displayNext() {
  console.log(this.currentIndex);
  if (this.currentIndex<=this.images.length-1) {
    if(this.currentIndex==this.images.length-1)
    {
      this.currentIndex=this.images.length-1;
    }
    else{
      this.currentIndex++
    }
  } 
}
startSlideshow() { 
    this.intervalId = setInterval(() => {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; 
      }
      console.log("show")
    }, 2000); 
  }
stop()
{
  console.log("stop")
 
  clearInterval(this.intervalId);

    
}
}
