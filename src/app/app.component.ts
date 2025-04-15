import { Component } from '@angular/core';
import { LandingComponent } from './landinComponent/landing/landing.component';
import { FormsModule } from '@angular/forms'; 
import { MasterMainContentComponentComponent } from './masterContentComponent/master-main-content-component/master-main-content-component.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footerComponent/footer/footer.component';
import { HeaderComponent } from './headerComponent/header/header.component';
import { ErrorComponent } from './errorComponent/error/error.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  title = 'my-angular-app';
  check:boolean=false;
  checkIfErrorPage(component: any) {
    if(component instanceof ErrorComponent || component instanceof LoginComponent || component instanceof SignUpComponent)
    {
      this.check=true;
    }
    else{
      this.check=false;
    }
  }
}
