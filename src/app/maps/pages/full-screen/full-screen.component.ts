import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Center } from '../../Interfaces/center.interface';

@Component({
  selector: 'full-screen',
  template: `
    <div  class="map__container"
          #map>
    </div>
    <coords [center]="center"></coords>
    <middle></middle>
  `,
  styles: []
})
export class FullScreenComponent implements AfterViewInit,OnDestroy {

  map!: mapboxgl.Map;
  @ViewChild('map') divMap!:ElementRef; 

  center:Center = {
    lng: -75.735267,
    lat: 4.796409
  }

  constructor() { }

  ngOnDestroy(): void {
    this.map.off('move',()=>{});
  }
  
  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      //         lng      lat
      center: this.center,
      zoom: 17
    });

    this.map.on('move',()=>{
      this.center = this.map.getCenter();
    })
  }

}
