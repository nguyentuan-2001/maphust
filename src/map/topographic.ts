import maplibregl, { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import data from '../hust/data.json';
const roads = require('../hust/bd.geojson');
const bd =  require('../image/bd.png');
const home =  require('../image/nha.png');

function overMap(map: Map){
  map.on('load',(e)=>{

    map.addSource('radar', {
      'type': 'image',
      'url': bd,
      'coordinates': [
          [105.84081419033518, 21.008465478260327],
          [105.84832437539374, 21.008465478260327],
          [ 105.84830291772228,21.001644655866233],
          [ 105.84081419033518,21.001644655866233]
      ]
    });
    map.addLayer({
        id: 'radar-layer',
        'type': 'raster',
        'source': 'radar',
        'paint': {
          'raster-fade-duration': 0,
          'raster-opacity':1
        }
    });
    map.addSource('home', {
      'type': 'image',
      'url': home,
      'coordinates': [
          [105.84081419033518, 21.008465478260327],
          [105.84830291772228, 21.008465478260327],
          [ 105.84830291772228,21.001644655866233],
          [ 105.84081419033518,21.001644655866233]
      ]
    });
    map.addLayer({
        id: 'home-layer',
        'type': 'raster',
        'source': 'home',
        'paint': {
          'raster-fade-duration': 0,
          'raster-opacity':1
        }
    });
  
    map.addSource("street", {
        type: "geojson",
        data: roads,
    });
  
    map.addLayer({
        id: "street-id",
        type: "line",
        source: "street",
        paint: {
        "line-color": "#0066CC",
        "line-opacity": 0,
        "line-width": 2,
        },
    });
    map.addSource('vin-src',{
      type:'geojson',
      data:data
    })
  
    map.addLayer({
      id: 'vin-name',
      type: 'symbol',
      source: 'vin-src',
      layout: {
        'text-field': ['format', ['get', 'name'], { 'font-scale': 1 }],
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15, 0, 15.5, 4, 16, 6, 16.5, 8, 17, 10, 17.5, 12, 18, 14, 18.5, 16, 19, 18
        ],
        'text-offset': [0, 3],
        'text-anchor': 'top'
      },
      paint: {
        'text-color': 'white'
      }
    });
       
    // Create a popup, but don't add it to the map yet.
    const popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false
    });
      
    map.on('mouseenter', 'vin-name', (e) => {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';
    
      if (e.features) {
        // Get the first feature
        const feature = e.features[0];

        if (feature.geometry && (feature.geometry as any).coordinates) {
          const coordinates = (feature.geometry as any).coordinates;
          const description = feature.properties.name;
          popup.setLngLat(coordinates).setHTML(description).addTo(map);
        }
      }
    });
    map.on('mouseleave', 'vin-name', () => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });

  });
}

export default overMap;