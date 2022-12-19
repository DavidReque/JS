let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -22.90642,
        lng: -43.18223,
      },
      map,
      title: "Rio de Janeiro",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 34.05223,
        lng: -118.24368,
      },
      map,
      title: "Los Angeles",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 48.85341,
        lng:  2.3488,
      },
      map,
      title: "Paris",
    })
  );
}