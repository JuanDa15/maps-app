import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  constructor(private locations:LocationsService) { }

  get locationsArr(){
    return this.locations.properties;
  }

  ngOnInit(): void {
  }

}
