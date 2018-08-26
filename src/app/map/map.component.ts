import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // map: google.maps.Map;

  getLocation() {
  }

  showPosition() {
  }

  ngOnInit() {
    let map;

    function setMap() {
      map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 15
      });
    }

    function getUserPostion() {
      // set the current location variable and marker on the map
      async function success(position) {
        const currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        setMarkers(currentLocation);
      }

      const error = (err) => {
        console.log('Cannot access your current location');
        const center = new google.maps.LatLng(43.817513, -111.789159);
        setMarkers(center);
      };

      // Options for the geolocation
      const options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      };

      // find the user's current location (if they allow)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else {
        console.error('Cannot access your current location');
        const center = new google.maps.LatLng(43.817513, -111.789159);
        setMarkers(center);
      }
    }

    function setMarkers(currentLocation) {
      const hartGym = new google.maps.LatLng(43.819253, -111.786635);
      const snowParkingLot = new google.maps.LatLng(43.820142, -111.784266);
      const walmart = new google.maps.LatLng(43.8560, -111.7739);
      // const im = 'https://www.robotwoods.com/dev/misc/bluecircle.png';
      const im = '../../assets/location.png';

      // center the map where the user is currently at or where the center was defined
        map.setCenter(currentLocation);

      const userMarker = new google.maps.Marker({
        position: currentLocation,
        icon: im
      });

      const hartMarker = new google.maps.Marker({
        position: hartGym,
        // animation: google.maps.Animation.BOUNCE,
        title: 'Hart Gym'
      });

      const snowMarker = new google.maps.Marker({
        position: snowParkingLot,
        // animation: google.maps.Animation.DROP,
        title: 'Snow Parking Lot',
      });

      const walmartMarker = new google.maps.Marker({
        position: walmart,
        title: 'Walmart',
      });

      /* Set the markers on the map */
      hartMarker.setMap(map);
      snowMarker.setMap(map);
      walmartMarker.setMap(map);
      userMarker.setMap(map);
    }

    setMap();
    getUserPostion();
  }

  // To use this code on your website, get a free API key from Google.
  // Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
}
