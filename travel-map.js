document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('travel-map', {
    scrollWheelZoom: false
  }).setView([20, 10], 2);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    maxZoom: 18
  }).addTo(map);

  var greenIcon = L.divIcon({
    className: 'custom-pin',
    html: '<div style="width:14px;height:14px;border-radius:50%;background:#0F4C3A;border:2px solid #FAF8F3;"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });

  var trips = [
    { name: 'Tokyo, Japan', lat: 35.6762, lng: 139.6503, note: 'Replace with a real note about this trip.' },
    { name: 'Lisbon, Portugal', lat: 38.7223, lng: -9.1393, note: 'Replace with a real note about this trip.' },
    { name: 'Cape Town, South Africa', lat: -33.9249, lng: 18.4241, note: 'Replace with a real note about this trip.' },
    { name: 'Mexico City, Mexico', lat: 19.4326, lng: -99.1332, note: 'Replace with a real note about this trip.' },
    { name: 'Reykjavik, Iceland', lat: 64.1466, lng: -21.9426, note: 'Replace with a real note about this trip.' }
  ];

  trips.forEach(function (trip) {
    var marker = L.marker([trip.lat, trip.lng], { icon: greenIcon }).addTo(map);
    marker.bindPopup(
      '<div class="popup-title">' + trip.name + '</div>' +
      '<div class="popup-note">' + trip.note + '</div>'
    );
  });
});
