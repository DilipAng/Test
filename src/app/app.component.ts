import { Component } from '@angular/core';
import { ProductService } from './product.service';
//import { AdvertisementService } from './advertisement.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html'
  template: `<h1> {{title}} </h1> <br>
            <button class="btn btn-primary" [style.background]= "isActive? 'Blue' : 'Grey'" 
            on-click = "onClick($event)">Submit</button> <br> 
            <img src="{{imageUrl}}" /> <br> <br>
            <input text ="text" ngModel="title" />
            what you have entered: {{title}} <br>
            <products></products>    <br>
            <bs-Jambotron> </bs-Jambotron><br>
            <user-form></user-form>
            
                        
            `,
  providers : []
})
export class AppComponent {
  title = 'My First angular app works';
  imageUrl = "http://lorempixel.com/400/200/";
  isActive = true;

  onClick($event)
  {
    alert("Hello world");
    console.log("Hello world console",$event);
  }

 
}
