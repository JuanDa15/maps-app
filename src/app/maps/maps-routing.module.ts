import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { DetailedLocationComponent } from './pages/detailed-location/detailed-location.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'fullscreen', component:FullScreenComponent},
      {path:'zoom-range', component:ZoomRangeComponent},
      {path:'bookmarks', component:BookmarksComponent},
      {path:'locations', component:LocationsComponent},
      {path:'detailed/:id',component:DetailedLocationComponent},
      {path:'**', redirectTo: 'fullscreen'}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
