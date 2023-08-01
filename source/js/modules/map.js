if (document.getElementById('map')) {
  let map = L.map('map').setView([55.816540, 37.637179], 15);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(map);

  let mapIcon = L.icon({
    iconUrl: '../img/map-marker-png.png',
    iconSize: [48, 48],
  });

  let marker = L.marker([55.816909, 37.637179], {
    icon: mapIcon,
  }).addTo(map);
}
