
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' //Tile de OpeenStreetMap

let myMap = L.map('myMap').setView([3.374467, -76.533112], 15.4) // Establece la vista por defecto centrada en las coords

L.tileLayer(tilesProvider, {maxZoom: 20,}).addTo(myMap)


let iconMarker = L.icon({ // Establece un ícono en .png como marcador propio
  iconUrl: 'antena.png',
  iconSize: [44,41],
  iconAnchor: [23,37]

})

let marker2 = L.marker([3.374467,-76.533112], {icon: iconMarker}).addTo(myMap) //Coordenadas EIEE

  let hTRX = 30; // Altura de la antena transmisora. Es constante.
  let flag = 1;
// Aquí se captura la frecuencia de operación
var frecOp = prompt("Ingrese una frecuencia de operación entre 150MHz y 1500MHZ \n"+
"Nota: solo el valor numérico. Ej: si se trata de 300MHz, solo ingrese el valor numérico 300.");

  frecOp = frecOp*1000000; // Y se convierte a MHz

  //Reinicia la página si la frecuencia ingresada no está en el rango
  if (frecOp>=150000000 && frecOp<=1500000000) {
    flag=0;
  } else {
    alert("La frecuencia de operación no está en el rango 150MHz y 1500MHz. Ingrese un valor válido.")
    location.reload();
    flag=1;
  }

    //Aquí se captura el valor de la altura de la antena receptora
    var hRCV = prompt("Ingrese un valor para la altura efectiva de la antena receptora \n"+
    "que esté entre 1m y 10m");

    // Reinicia la página si la altura no está en el rango
    if (hRCV>=1 && hRCV<=10) {

    } else {
      alert("La altura efectiva no está en el rango 1m y 10m. Ingrese un valor válido.")
      flag=0;
      location.reload();
      flag=0;
    }


  myMap.on('click', e =>{ // Coloca a través del evento click un marcador en la coordenada indicada

  longLugar = e.latlng.lng;
  latiLugar = e.latlng.lat;
  let distanciam = L.latLng([3.374467,-76.533112]).distanceTo([latiLugar,longLugar]);
  let distanciakm = distanciam/1000;

  if (distanciakm<1) {
    alert("La distancia entre las antenas no es de al menos 1km.")
    flag=0;
    location.reload();
    flag=0;
    distanciakm=NaN;
  }
  else if (distanciakm>20) {
    alert("La distancia entre las antenas excede los 20km.")
    flag=0;
    location.reload();
    flag=0;
    distanciakm=NaN;
  }
  else {
    alert("Distancia entre antenas: " + distanciakm + " Km.");
    }


function Loss(frecuency,distance) {
  midCity = (1.1*Math.log10(frecuency)-0.7)*30-1.56*Math.log10(frecuency)+0.8;
  alert("Factor de corrección a(h2): "+midCity);
  return 69.55+26.16*Math.log10(frecuency)-13.82*Math.log10(30)-midCity+(44.9-6.55*Math.log10(30))*Math.log10(distance);

}



alert("Frecuencia de operación: " +frecOp+" MHz.\n"+
      "Distancia entre las antenas: " +distanciakm+ " Km.\n"+
      "Altura de la antena transmisora: 30m.\n"+
      "Altura de la antena receptora: " +hRCV+" m.\n"+
      "Por tanto. Las pérdidas serán L=" +Loss(frecOp,distanciakm)+" dB.");


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
