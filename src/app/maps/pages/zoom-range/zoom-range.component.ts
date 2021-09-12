import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    @import './src/styles.scss';

  .zoom__container{
    min-width: 355px;
    max-width: 400px;
    position:fixed;
    bottom: 50px;
    left: 20px;
    background-color: $alice_blue;
    border-radius: .5rem;
    overflow: hidden;
    border:1px solid $battleship_gray;
    box-shadow: 0 0 4px $battleship_gray;
    transition: width 1s ease;

    label{
      display:block;
      padding:.5rem 1.5rem;
      border-bottom: 1px solid $battleship_gray;
    }
  }

  .zoom__input{
    padding: .5rem 1.5rem;
    display:flex;
    flex-flow: row nowrap;

    input{
      width:100%;
    }

    button{
      padding: .5rem .5rem;
      border: none;
      font-weight: 600;
      cursor: pointer;
      background-color: #0075ff;
      color: #fff;
      margin:0 .2rem;
      border-radius: .5rem;
      border: 1px solid #0075ff;
      transition: all .5s ease;

      &:hover{
        background-color: #fff;
        color:#0075ff;
      }
    }
  }
  `]
})
export class ZoomRangeComponent implements AfterViewInit,OnDestroy {

  @ViewChild('map') divMap!:ElementRef;
  @ViewChild('zoomInput') zoomLevel!:ElementRef;
  map!:mapboxgl.Map;
  zoom:number = 16;
  center = {
    lat: -75.735267,
    lng: 4.796409
  }



  constructor() { }

  ngOnDestroy(): void {
    this.map.off('zoom', ()=>{});
    this.map.off('move', ()=>{});
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',      
      center: [this.center.lat, this.center.lng],
      zoom:this.zoom,
      maxZoom:19    
    })

    this.map.on('zoom', (event)=>{
      this.zoom = this.map.getZoom();
    })

    this.map.on('move',()=>{
      this.center =  this.map.getCenter();
    })
  }




  inputZoom(){
    this.zoom = this.zoomLevel.nativeElement.value;
    this.map.zoomTo(this.zoom);
  }

  zoomIn(){
    this.map.zoomIn();
  }

  zoomOut(){
    this.map.zoomOut();
  }

}
