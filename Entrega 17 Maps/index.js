let marker, map;

function inintMap(){
   // console.log("nicializando mapa")
   const posicion = {
    lat: -25.363,
    lng: 131.044
   }

   const map = new google.maps.Map(document.getElementById("map"),{
    zoom: 4,
    center: posicion
   })

   const marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posicion inicial"
   })

   //obtener geolocalizacion
   geoPosicion
}
function geoPosicion(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const posicion = geoLoc.matchPosition(position =>{
            console.log(position.coords)
        }, error => console.error(error),{timeout:6000})
    }else{
        alert("navegador no admite geolocalizacion")
    }
}

function centramapa(){
const nuevaPos ={
    lat: position.coords.latitude,
    lng: position.coords.longitude
}
console.log(nuevaPos)
marker.setPosition(nuevaPos)
map.setCenter(nuevaPos)
}

function oError(error){
    console.log("Se ha producido erros y se ha gstionado")
    console.error(error)
}