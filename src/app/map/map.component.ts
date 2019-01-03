import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
    let map = google.maps.Map;

    function setMap() {
      // disable controls if on the homepage map
      if (window.location.toString().includes('home')) {
        map = new google.maps.Map(document.getElementById('google-map'), {
          zoom: 16,
          disableDefaultUI: true
        });
      } else {
        map = new google.maps.Map(document.getElementById('google-map'), {
          zoom: 15,
        });
      }
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
      const manwaringCenter = new google.maps.LatLng(43.817848, -111.784418);
      const theLanding = new google.maps.LatLng(43.817204, -111.794373);
      const walmart = new google.maps.LatLng(43.8560, -111.7739);
      const lLot = new google.maps.LatLng(43.811734, -111.782626);
      const romney = new google.maps.LatLng(43.820142, -111.784076);
      // const im = 'https://www.robotwoods.com/dev/misc/bluecircle.png';
      // const im = '../../assets/location.png';

      // center the map where the user is currently at or where the center was defined
      map.setCenter(currentLocation);

      // const userMarker = new google.maps.Marker({
      //   position: currentLocation,
      //   // icon: im
      // });

      const manwaringCenterMarker = new google.maps.Marker({
        position: manwaringCenter,
        label: 'MC',
        title: 'Hart Gym'
      });

      const theLandingMarker = new google.maps.Marker({
        position: theLanding,
        label: 'L',
        title: 'The Landing',
      });

      const walmartMarker = new google.maps.Marker({
        position: walmart,
        label: 'W',
        title: 'Walmart',
      });

      const lLotMarker = new google.maps.Marker({
        position: lLot,
        label: 'LL',
        title: 'L-Lot',
      });

      const romneyMarker = new google.maps.Marker({
        position: romney,
        label: 'R',
        title: 'Romney',
      });

      /* Set the markers on the map */
      manwaringCenterMarker.setMap(map);
      theLandingMarker.setMap(map);
      walmartMarker.setMap(map);
      lLotMarker.setMap(map);
      romneyMarker.setMap(map);
      // userMarker.setMap(map);
    }

    setMap();
    getUserPostion();
  }

  // To use this code on your website, get a free API key from Google.
  // Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
}
