import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MinimapComponent } from './components/minimap/minimap.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { MiddleComponent } from './components/middle/middle.component';
import { CoordsComponent } from './components/coords/coords.component';
import { DetailedLocationComponent } from './pages/detailed-location/detailed-location.component';


@NgModule({
  declarations: [
    MinimapComponent,
    FullScreenComponent,
    BookmarksComponent,
    ZoomRangeComponent,
    LocationsComponent,
    MiddleComponent,
    CoordsComponent,
    DetailedLocationComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
