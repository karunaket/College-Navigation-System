var LRM = require('leaflet-routing-machine');

var map = L.map('map').setView([40.7831, -73.9712], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var startMarker, destinationMarker;

function navigate() {
  var startLocation = document.getElementById("start").value;
  var destination = document.getElementById("destination").value;

  Nominatim.geocode({ q: startLocation }).then(function(results) {
    if (results.length > 0) {
      startMarker = L.marker([results[0].lat, results[0].lon]).addTo(map);
    }
  });

  Nominatim.geocode({ q: destination }).then(function(results) {
    if (results.length > 0) {
      destinationMarker = L.marker([results[1].lat, results[1].lon]).addTo(map);
    }
  });

  if (startMarker && destinationMarker) {
    var waypoints = [startMarker, destinationMarker];
    var routingControl = LRM.control({
      waypoints: waypoints,
      routeWhileDragging: true
    }).addTo(map);
  }
}
