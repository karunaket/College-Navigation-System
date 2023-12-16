var LRM = require('leaflet-routing-machine');

var map = L.map('map').setView([40.7831, -73.9712], 16);
L.tileLayer('{https://karunaket.github.io/College-Navigation-System/}/map.geojson/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var startMarker, destinationMarker;

function navigate() {
  var startLocation = document.getElementById("start").value;
  var destination = document.getElementById("destination").value;

  Nominatim.geocode({ q: startLocation, addressdetails: true }).then(function(results) {
    if (results.length > 0) {
      if (results.length > 1) {
        // ... handle multiple results (display list, etc.)
      } else {
        startMarker = L.marker([results[0].lat, results[0].lon]).addTo(map);
      }
    } else {
      // Handle no results case
    }
  });

  Nominatim.geocode({ q: destination, addressdetails: true }).then(function(results) {
    if (results.length > 0) {
      if (results.length > 1) {
        // ... handle multiple results (display list, etc.)
      } else {
        destinationMarker = L.marker([results[1].lat, results[1].lon]).addTo(map);
      }
    } else {
      // Handle no results case
    }
  });
}