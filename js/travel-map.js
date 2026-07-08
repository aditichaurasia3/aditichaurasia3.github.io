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
    { name: 'San Francisco', lat: 37.7749, lng: -122.4194, note: 'Home, repping the Bay Area wherever I go', icon: heartIcon },
    { name: 'Dublin, Ireland', lat: 53.3498, lng: -6.2603, note: 'My second home, studied abroad there and returning for my masters' },
    { name: 'San Diego', lat: 32.7157, lng: -117.1611 },
    { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
    { name: 'Boston', lat: 42.3601, lng: -71.0589, note: "Spent a transformative summer here, can't say the same about the winters" },
    { name: 'New York City', lat: 40.7128, lng: -74.0060, note: "I've taken many trips here over the years, but I'd love to spend some time living here too!" },
    { name: 'Atlanta', lat: 33.7490, lng: -84.3880, note: 'First trip I took without family at 18, so it holds a special place' },
    { name: 'Minneapolis-Saint Paul', lat: 44.9778, lng: -93.2650 },
    { name: 'Thief River Falls, MN', lat: 48.1183, lng: -96.1814, note: 'My first taste of small-town Midwest' },
    { name: 'Honolulu', lat: 21.3069, lng: -157.8583, note: 'Favorite family trip' },
    { name: 'Cabo San Lucas', lat: 22.8905, lng: -109.9167, note: 'Senior year spring break (obviously)' },
    { name: 'La Paz, Mexico', lat: 24.1426, lng: -110.3128, note: 'Snorkeled with whale sharks!' },
    { name: 'Cancun', lat: 21.1619, lng: -86.8515 },
    { name: 'Ensenada', lat: 31.8667, lng: -116.6000 },
    { name: 'Rovaniemi, Finland', lat: 66.5039, lng: 25.7294, note: 'Saw the northern lights for the first time in thigh-high snow, absolutely magical' },
    { name: 'Paris', lat: 48.8566, lng: 2.3522, note: 'Five years of high school French did not come in handy' },
    { name: 'Barcelona', lat: 41.3851, lng: 2.1734, note: 'Absolutely gorgeous, hoping to go back soon' },
    { name: 'Madrid', lat: 40.4168, lng: -3.7038 },
    { name: 'London', lat: 51.5072, lng: -0.1276 },
    { name: 'Carlingford, Ireland', lat: 54.0500, lng: -6.1900, note: 'The definition of a charming Irish small town and REALLY good pub food' },
    { name: 'Malta (Valletta & St. Julian\'s)', lat: 35.8989, lng: 14.5146, note: 'Girls trip and survival challenge but amazing memories' },
    { name: 'Marrakech', lat: 31.6295, lng: -7.9811, note: 'Got happily lost in the souks' },
    { name: 'Casablanca', lat: 33.5731, lng: -7.5898 },
    { name: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
    { name: 'Cape Cod', lat: 41.6688, lng: -70.2962, note: 'I felt like I was living in a Norman Rockwell painting' },
    { name: 'Toronto', lat: 43.6532, lng: -79.3832 },
    { name: 'Quebec City', lat: 46.8139, lng: -71.2080 },
    { name: 'Montreal', lat: 45.5019, lng: -73.5674 },
    { name: 'Philadelphia', lat: 39.9526, lng: -75.1652 },
    { name: 'Washington, D.C.', lat: 38.9072, lng: -77.0369 },
    { name: 'Baltimore', lat: 39.2904, lng: -76.6122 },
    { name: 'Thousand Islands, Canada', lat: 44.3300, lng: -76.0000, note: 'A trip I took with my mom, and it was her favorite place' },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777, note: "Where my parents call home, so it's always a good time" },
    { name: 'Delhi', lat: 28.7041, lng: 77.1025 },
    { name: 'Mussoorie, India', lat: 30.4598, lng: 78.0664, note: 'Himalayan hill station' },
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 }
  ];

  trips.forEach(function (trip) {
    var marker = L.marker([trip.lat, trip.lng], { icon: trip.icon || greenIcon }).addTo(map);
    var popupHtml = '<div class="popup-title">' + trip.name + '</div>';
    if (trip.note) {
      popupHtml += '<div class="popup-note">' + trip.note + '</div>';
    }
    marker.bindPopup(popupHtml);
  });
});
