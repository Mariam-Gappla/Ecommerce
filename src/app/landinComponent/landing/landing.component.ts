import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  standalone: true
})
export class LandingComponent {
images:string[];
constructor()
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
