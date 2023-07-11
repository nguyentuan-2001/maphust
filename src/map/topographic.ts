import maplibregl, { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import data from '../hust/data.json';
const roads = require('../hust/bd.geojson');
const bd =  require('../image/bd.png');
const home =  require('../image/nha.png');
const building = require('../hust/nha.geojson');

function overMap(map: Map){
  map.on('load',(e)=>{

    map.addSource('radar', {
      'type': 'image',
      'url': bd,
      'coordinates': [
          [105.84081419033518, 21.008465478260327],
          [105.84830291772228, 21.008465478260327],
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
    // map.addSource('home', {
    //   'type': 'image',
    //   'url': home,
    //   'coordinates': [
    //       [105.84081419033518, 21.008465478260327],
    //       [105.84830291772228, 21.008465478260327],
    //       [ 105.84830291772228,21.001644655866233],
    //       [ 105.84081419033518,21.001644655866233]
    //   ]
    // });
    // map.addLayer({
    //     id: 'home-layer',
    //     'type': 'raster',
    //     'source': 'home',
    //     'paint': {
    //       'raster-fade-duration': 0,
    //       'raster-opacity':1
    //     }
    // });
  
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
  
    map.addSource('building',{
      type:'geojson',
      data:building
    })

    map.addLayer({
      id: '3d-building',
      type: 'fill-extrusion',
      source: 'building',
      paint: {
        'fill-extrusion-color': '#A1C2F1', // Màu sắc tòa nhà
        'fill-extrusion-height': ['get', 'height'], // Chiều cao tòa nhà
        'fill-extrusion-base': 0, // Độ cao cơ sở của tòa nhà
        'fill-extrusion-opacity':0.95
        }
    });

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
        'text-anchor': 'bottom', // Đặt text-anchor là 'bottom' để đẩy văn bản lên đỉnh các tòa nhà
        'text-offset': ['interpolate', ['linear'], ['zoom'],
          15, ['literal', [0, 0]], // Độ cao offset ban đầu
          16, ['literal', [0, -10]], // Độ cao offset khi zoom lên
          18, ['literal', [0, -15]] // Độ cao offset khi zoom lên cao hơn
        ],
        'text-font': ['DIN Offc Pro Bold', 'Arial Unicode MS Bold'] // Đặt kiểu chữ đậm
      },
      paint: {
        'text-color': 'white',
        'text-halo-color': 'black',
        'text-halo-width': 1,
      }
    });
    
       
    // Create a popup, but don't add it to the map yet.
    // const popup = new maplibregl.Popup({
    // closeButton: false,
    // closeOnClick: false
    // });
      
    // map.on('mouseenter', 'vin-name', (e) => {
    //   // Change the cursor style as a UI indicator.
    //   map.getCanvas().style.cursor = 'pointer';
    
    //   if (e.features) {
    //     // Get the first feature
    //     const feature = e.features[0];

    //     if (feature.geometry && (feature.geometry as any).coordinates) {
    //       const coordinates = (feature.geometry as any).coordinates;
    //       const description = feature.properties.name;
    //       popup.setLngLat(coordinates).setHTML(description).addTo(map);
    //     }
    //   }
    // });
    // map.on('mouseleave', 'vin-name', () => {
    //   map.getCanvas().style.cursor = '';
    //   popup.remove();
    // });
    

  });
}

export default overMap;