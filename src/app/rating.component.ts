import { Component } from "@angular/core"

@Component(
{
selector: "rating",
 template : `
                        <span
                        class="glyphicon"
                        [class.glyphicon-star-empty]="ratings <1"
                        [class.glyphicon-star]="ratings >=1"
                        (click)="onClick(3)"
                        >
                        </span>

            <p>Search icon: <span class="glyphicon glyphicon-star"></span></p>
    
             `,

//templateUrl : 'rating.component.html',
styles: [`        
            .glyphicon-star {
                            color: orange;   
                             }   
         `]                 
}

)

export class RatingComponent{
ratings;

onClick(ratingValue)
{
        this.ratings = ratingValue;
        console.log(this.ratings);
}


}