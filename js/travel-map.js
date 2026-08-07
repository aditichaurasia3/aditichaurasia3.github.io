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

  var heartIcon = L.divIcon({
    className: 'custom-pin-heart',
    html: '<div style="font-size:18px;line-height:1;">💚</div>',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });

  var trips = [
    { name: 'San Francisco', lat: 37.7749, lng: -122.4194, icon: heartIcon },
    { name: 'Dublin', lat: 53.3498, lng: -6.2603 },
    { name: 'San Diego', lat: 32.7157, lng: -117.1611 },
    { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
    { name: 'Boston', lat: 42.3601, lng: -71.0589 },
    { name: 'New York City', lat: 40.7128, lng: -74.0060 },
    { name: 'Atlanta', lat: 33.7490, lng: -84.3880 },
    { name: 'Minneapolis-Saint Paul', lat: 44.9778, lng: -93.2650 },
    { name: 'Thief River Falls', lat: 48.1183, lng: -96.1814 },
    { name: 'Honolulu', lat: 21.3069, lng: -157.8583 },
    { name: 'Cabo San Lucas', lat: 22.8905, lng: -109.9167 },
    { name: 'La Paz', lat: 24.1426, lng: -110.3128 },
    { name: 'Cancun', lat: 21.1619, lng: -86.8515 },
    { name: 'Ensenada', lat: 31.8667, lng: -116.6000 },
    { name: 'Rovaniemi', lat: 66.5039, lng: 25.7294 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Barcelona', lat: 41.3851, lng: 2.1734 },
    { name: 'Madrid', lat: 40.4168, lng: -3.7038 },
    { name: 'London', lat: 51.5072, lng: -0.1276 },
    { name: 'Carlingford, Ireland', lat: 54.0500, lng: -6.1900 },
    { name: 'Malta (Valletta & St. Julian\'s)', lat: 35.8989, lng: 14.5146 },
    { name: 'Marrakech', lat: 31.6295, lng: -7.9811 },
    { name: 'Casablanca', lat: 33.5731, lng: -7.5898 },
    { name: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
    { name: 'Cape Cod', lat: 41.6688, lng: -70.2962 },
    { name: 'Toronto', lat: 43.6532, lng: -79.3832 },
    { name: 'Quebec City', lat: 46.8139, lng: -71.2080 },
    { name: 'Montreal', lat: 45.5019, lng: -73.5674 },
    { name: 'Philadelphia', lat: 39.9526, lng: -75.1652 },
    { name: 'Washington, D.C.', lat: 38.9072, lng: -77.0369 },
    { name: 'Baltimore', lat: 39.2904, lng: -76.6122 },
    { name: 'Thousand Islands', lat: 44.3300, lng: -76.0000 },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Delhi', lat: 28.7041, lng: 77.1025 },
    { name: 'Mussoorie', lat: 30.4598, lng: 78.0664 },
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Las Vegas', lat: 36.1699, lng: -115.1398 },
    { name: 'Phoenix', lat: 33.4484, lng: -112.0740 },
    { name: 'Page', lat: 36.9147, lng: -111.4558 },
    { name: 'Bryce Canyon', lat: 37.5930, lng: -112.1871 }
  ];

  trips.forEach(function (trip) {
    var marker = L.marker([trip.lat, trip.lng], { icon: trip.icon || greenIcon }).addTo(map);
    marker.bindPopup('<div class="popup-title">' + trip.name + '</div>');
  });
});
