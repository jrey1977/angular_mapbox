import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'google-maps';

  mapa: mapboxgl.Map;

  ngOnInit(){
      (mapboxgl as any).accessToken = environment.mapboxKey;
      this.mapa = new mapboxgl.Map({
        container: 'mapa', // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-8.7078006, 42.2415182], // starting position
        zoom: 17 // starting zoom
      });

      this.mapa.on('click', function(e) {
          console.log('A click event has occurred at ' + e.lngLat);
      });


      this.crearMarcador(-8.707833658881412, 42.243117477409555);

      // Add zoom and rotation controls to the map.
      this.mapa.addControl(new mapboxgl.NavigationControl());



  }

  test(){
    console.log('Linea 41');
  }

  crearMarcador(lng: number, lat: number){
      const marker = new mapboxgl.Marker({
        draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

      marker.on('drag',()=> {
        console.log(marker.getLngLat());
      })
  }


}
