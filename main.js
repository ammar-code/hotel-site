function initMap() {
  let chicago = {
    lat: 41.881832,
    lng: -87.623177
  };
  let options = {
    center: chicago,
    zoom: 13
  };
  let map = new google.maps.Map(document.querySelector("#map"), { options });
  let marker = new google.maps.Marker({ position: chicago, map: map });
}
