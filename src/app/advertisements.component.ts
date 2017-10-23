import { Component } from '@angular/core';
import { AdvertisementService } from './advertisement.service';
@Component({
  selector: 'Advertisements',
  //templateUrl: './app.component.html'
  template: `<h1> Advertisements </h1>
                <ul font> 
                <li *ngFor = "let ad of ads">
                    {{ad}} 
                </li>
                </ul>
                `,
  providers : [AdvertisementService]
})
export class AdvertisementComponent {
    ads;
    constructor(AdServer: AdvertisementService)
    {
            this.ads = AdServer.getAds();

    }

}
