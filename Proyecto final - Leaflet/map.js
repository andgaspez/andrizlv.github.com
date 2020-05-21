/*let f = prompt("Inserte la frecuencia en Hz");
console.log("La frecuencia es: " + f + " Hz.");*/
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' //Tile de OpeenStreetMap

let myMap = L.map('myMap').setView([3.374467, -76.533112], 15.4) // Establece la vista por defecto centrada en las coords

L.tileLayer(tilesProvider, {maxZoom: 20,}).addTo(myMap)

//let marker = L.marker([3.374467, -76.533112]).addTo(myMap)

let iconMarker = L.icon({ // Establece un ícono en .png como marcador propio
  iconUrl: 'antena.png',
  iconSize: [44,41],
  iconAnchor: [23,37]

})

let marker2 = L.marker([3.374467,-76.533112], {icon: iconMarker}).addTo(myMap) //Coordenadas EIEE

//let marker3 = L.marker([3.374467,-76.533112], {icon: iconMarker}).addTo(myMap) //Coordenadas Biblioteca


  myMap.on('click', e =>{ // Coloca a través del evento click un marcador en la coordenada indicada

  longLugar = e.latlng.lng;
  latiLugar = e.latlng.lat;
  let distanciam = L.latLng([3.374467,-76.533112]).distanceTo([latiLugar,longLugar]);
  let distanciakm = distanciam/1000;

  function perdidas(distancia, frecuencia){
    return ((4*Math.PI*frecuencia*distancia)/300000000)*((4*Math.PI*frecuencia*distancia)/300000000);
  }
  function perdidasdB(distancia, frecuencia){
    return 10*(Math.log(perdidas(distancia, frecuencia))/Math.log(10));
  }
  var frecuencia = prompt("Ingrese un valor para frecuencia");
  alert("Frecuencia: "+frecuencia+" Hz.\nLatitud: " + latiLugar  + "\n" +
        "Longitud: " + longLugar + ".\n" + "Distancia entre antenas: (" + distanciam + " m) ó (" + distanciakm + " Km).\n"
        + "Las pérdidas serán: " + perdidas(distanciam,frecuencia) + " veces.\n"
        + "Las pérdidas en dB serán: " + perdidasdB(distanciam,frecuencia)+ " dB."
      );


    let latLng = myMap.mouseEventToLatLng(e.originalEvent)
    L.marker([latLng.lat, latLng.lng], {icon: iconMarker}).addTo(myMap)




  });


/*myMap.on('click', function(e) {
    lugar = e.latlng;
    console.log(lugar);
});*/

/* myMap.on('click',
					function(e){
						var coord = e.latlng.toString().split(',');
						var lat = coord[0].split('(');
						var lng = coord[1].split(')');

					console.log("Latitud " + lat[1] + " y longitude:" + lng[0]);
        });
*/

// Distancia entre dos puntos
/*let distanciam = L.latLng([3.490574,-76.491759]).distanceTo([3.366988,-76.528999]);
let distanciakm = distanciam/1000;
console.log("Distancia en Km es:"distanciakm);*/


/*
function perdidas(distancia, frecuencia){
  return ((4*Math.PI*frecuencia*distancia)/300000000)*((4*Math.PI*frecuencia*distancia)/300000000);
}*/
