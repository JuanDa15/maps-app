import { Component, OnInit } from '@angular/core';

interface menuConfig{
  path: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{

  menu:menuConfig[] = [
    {
      path: '/maps/fullscreen',
      name: 'fullscreen'
    },
    {
      path: '/maps/zoom-range',
      name: 'zoom range'
    },
    {
      path: '/maps/bookmarks',
      name: 'bookmarks'
    },
    {
      path: '/maps/locations',
      name: 'locations'
    }
  ]

  constructor() { }

}
