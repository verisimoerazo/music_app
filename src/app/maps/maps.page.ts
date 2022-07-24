import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>
  newMap: GoogleMap;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.createMap();
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.googleApiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 15,
      }
    })
  }

}
