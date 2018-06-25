import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  service: AppService;
  nearAddresses: any[];
  currentAddress: string;

  constructor(service: AppService) {
    this.service = service;

    //Get current geolocation
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition((position) => {
        let currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        //Call function service
        service.nearAddresses(JSON.stringify(currentPosition)).subscribe(res => {
          this.nearAddresses = res
        }, error => console.log(error));

        //Call function service
        service.currentAddress(JSON.stringify(currentPosition)).subscribe(res => {
          this.currentAddress = res[0].formatted_address;
        }, error => console.log(error));
      });

    } else {
      this.nearAddresses = [];
      console.log('localization not allowed');
    }

  }

}