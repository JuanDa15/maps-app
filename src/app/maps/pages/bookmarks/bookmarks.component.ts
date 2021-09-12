import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Center } from '../../Interfaces/center.interface';

interface bookmarkObj{
  bookmark?:mapboxgl.Marker,
  color: string,
  center?: [number,number]
}


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements AfterViewInit,OnDestroy {

  @ViewChild('map') divMap!:ElementRef;
  map!:mapboxgl.Map;
  zoom:number = 16;
  center:Center = {
    lng: -75.735267,
    lat: 4.796409
  }
  bookmarksArr:bookmarkObj[] = [];

  constructor() { }

  ngOnDestroy(): void {
    this.saveLocalStorage()
    this.map.off('move',()=>{});
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoom
    });

  
    this.map.on('move',()=>{
      this.center = this.map.getCenter();
    })

    this.loadLocalStorage();

    // const markerHTML:HTMLElement = document.createElement('div');
    // markerHTML.innerHTML = 'hola mundo';
  }

  addBookmark(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const newBookmark = new mapboxgl.Marker({
      draggable:true,
      color: color
    }).setLngLat(this.center).addTo(this.map);

    this.bookmarksArr.push({
      bookmark: newBookmark,
      color: color
    })
  }

  toBookmark(bookmark:mapboxgl.Marker){

    this.map.flyTo({
      center:bookmark.getLngLat(),
    })
  }

  deleteBookmark(index:number){
    this.bookmarksArr[index].bookmark?.remove();
    this.bookmarksArr.splice(index,1);
    this.saveLocalStorage();
  }

  saveLocalStorage(){
    const lsArr: bookmarkObj[] = []

    this.bookmarksArr.forEach( m => {
      const color:string = m.color;
      const {lng,lat} = m.bookmark!.getLngLat();

      lsArr.push({
        color:color,
        center: [lng,lat]
      })
    })

    localStorage.setItem('bookmarks',JSON.stringify(lsArr));
  }

  loadLocalStorage(){
    
    if(localStorage.getItem('bookmarks')){
      const lsArr:bookmarkObj[] = JSON.parse(localStorage.getItem('bookmarks')!);
      
      lsArr.forEach( m => {
        const newBookmark = new  mapboxgl.Marker({
          color: m.color,
          draggable:true
        }).setLngLat(m.center!).addTo(this.map);

        this.bookmarksArr.push({
          bookmark: newBookmark,
          color: m.color
        })
      })

    }else{
      return;
    }
  }
}
