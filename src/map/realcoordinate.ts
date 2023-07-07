import maplibregl,{ Marker, Map} from "maplibre-gl";

export function realcoordinates(marker: Marker, map: Map) {
    document.getElementById('nearby')?.addEventListener('click', function() {
      getLocation();
    });
  
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log('false');
            
        }
    }
  
    function showPosition(position: GeolocationPosition) {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
        const location = new maplibregl.LngLat(lng, lat);
    
        const mapBounds = map.getBounds();
        console.log(mapBounds);
        
        if (mapBounds && mapBounds.contains(location)) {
            console.log("Tọa độ nằm trong khoảng map.");
            marker.setLngLat([lng, lat]);
        } else {
            const message = document.getElementById("message") as HTMLElement;
            const ok = document.getElementById("ok") as HTMLElement;
            message.style.display = "block";

            ok.addEventListener("click", function() {
            message.style.display = "none";
        });
      }
    }

  }