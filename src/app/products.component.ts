import { Component} from '@angular/core';
import { ProductService } from './product.service';

//import { Dat } from './data';
//import { HEROES } from './hero';

@Component({
  selector: 'products',
  //templateUrl: './app.component.html'
  template: `<h1> Products </h1>
                 <product *ngFor="let Data1 of products"  [hssero]="Data1">
                 </product>
               `,
    styles: [` 
         .media {  
                   margin-bottom: 20px;    
                }
        `],

providers : [ProductService]


})
// export class ProductsComponent {
    
//     getProducts() : string[] 
//     {    
//             return ["Learning Angular 2","Pro TypeScript","ASP.NET"];    
//         } 
// }

export class ProductsComponent{
    products;
    //heroes = HEROES;
    constructor(ps: ProductService)
    {
        this.products = ps.getProducts();
        
        //this.products = JSON.stringify(ps.getProducts());

    }
 
    getProducts() : string[] 
         {    
                return ["Learning Angular 2","Pro TypeScript","ASP.NET"];    
            } 

}


