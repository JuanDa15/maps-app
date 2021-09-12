import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propiedad } from '../../Interfaces/locations.interface';
import { LocationsService } from '../../services/locations.service';
import * as mapboxgl from 'mapbox-gl';
import { Center } from '../../Interfaces/center.interface';

@Component({
  selector: 'app-detailed-location',
  template: `
    <div class="information">
    <h1>{{location.titulo}}</h1>
    <p>{{location.descripcion}}</p>
    </div>
    <div  class="map__container"
          #map>
    </div>
    <coords [center]="center"></coords>
    <middle></middle>
  `,
  styles: [`
    @import './src/styles.scss';

    .information{
      position: fixed;
      z-index: 99;
      bottom: 20px;
      left: 20px;
      background-color: $alice_blue;
      color: $yale_blue;
      border-radius: .5rem;
      border:1px solid $battleship_gray;
      box-shadow: 0 0 4px $battleship_gray;

      h1,p{
        margin: 0;
        padding: .5rem 1rem;
      }
    }

    .map__container{
      height: 100vh;
    }
  `]
})
export class DetailedLocationComponent implements OnInit,AfterViewInit {

  index!:number;
  location:Propiedad = {
    titulo: '',
    descripcion:'',
    lngLat:[0,0]
  };

  center:Center = {
    lng:0,
    lat:0
  };

  map!:mapboxgl.Map;

  @ViewChild('map') mapDiv!:ElementRef; 

  get locationsArr(){
    return this.locations.properties;
  }

  constructor(private activatedRoute:ActivatedRoute,
              private locations:LocationsService) { }

  ngAfterViewInit(): void {
    this.location = this.locationsArr[this.index];

    this.map = new mapboxgl.Map({
      container: this.mapDiv.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      //         lng      lat
      center: this.location.lngLat,
      zoom: 17
    })

    new mapboxgl.Marker().setLngLat(this.location.lngLat).addTo(this.map);

    this.center = {
      lng: this.location.lngLat[0],
      lat: this.location.lngLat[1]
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: ({id}) => this.index = id
    })
  }

}
