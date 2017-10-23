import { Component, Input } from '@angular/core'
import { Data } from './data'
import   {TruncatePipe } from "./truncate.pipe"
@Component({
    selector: 'product',
    //templateUrl: './app.component.html'
    template: `
                <div class="media">         
                   <div class="media-left">               
                        <a href="#"> <img class="media-object" src="{{ hssero.imageUrl }}">                          </a>          
                   </div>           
                   <div class="media-body"> 
                        <div class="media-body">    
                        <h4 class="media-heading">         
                                 {{ hssero.productName }}      
                        </h4>                   
                                 {{ hssero.releasedDate| date:"MM/dd/yy" }}    
                                   <br>                                        
                                  {{ hssero.description|truncate:15 }} 
                        </div>           
                    </div>
                </div>   
                     `,
    styles: [` 
           .media {  
                     margin-bottom: 20px;    
                  }
          `],
  
    providers : []
  
  
  })

  export class ProductComponent
  {
        
      @Input() hssero :Data; 
    
    }


  