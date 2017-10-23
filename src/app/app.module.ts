import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
//import { AdvertisementComponent } from './advertisements.component';
 import { RatingComponent} from "./rating.component"
 import { ProductComponent} from "./product.component"
 import { TruncatePipe } from "./truncate.pipe"
 import {  jumbotronComponent } from "./jambotron.component"
 import { UserFormComponent } from "./user-form.component";
 
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    //AdvertisementComponent
     RatingComponent,
     ProductComponent,
     TruncatePipe,
     jumbotronComponent,
     UserFormComponent
    
    
   
    //FormsModule,
    //HttpModule

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule      

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
