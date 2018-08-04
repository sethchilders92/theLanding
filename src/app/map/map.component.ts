import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  getLocation() {
  }

  showPosition() {
  }

  ngOnInit() {
    let map;
    let currentLocation;
    const center = new google.maps.LatLng(43.817513, -111.789159);
    const hartGym = new google.maps.LatLng(43.819253, -111.786635);
    const snowParkingLot = new google.maps.LatLng(43.820142, -111.784266);
    const im = 'http://www.robotwoods.com/dev/misc/bluecircle.png';
    
    map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 15
    });

    // set the current location variable and marker on the map
    const success = (position) => {
      currentLocation = { lat: position.coords.latitude, lng: position.coords.longitude }
      new google.maps.Marker({
        position: currentLocation,
        map: map,
        icon: im
      });
    }

    const error = (err) => {
      console.error(new Error(err));
    }

    // Options for the geolocation
    let options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };

    // find the user's current location (if they allow)
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(success, error, options);
    }
    
    // center the map where desired
    map.setCenter(center);    
    
    new google.maps.Marker({
      position: hartGym,
      map: map,
      // animation: google.maps.Animation.BOUNCE,
      title: 'Hart Gym'
    });
    
    new google.maps.Marker({
      position: snowParkingLot,
      map: map,
      // animation: google.maps.Animation.DROP,
      title: 'Snow Parking Lot',
    });

    // hartGymMarker.setMap(map);
  }


  // To use this code on your website, get a free API key from Google.
  // Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

}
