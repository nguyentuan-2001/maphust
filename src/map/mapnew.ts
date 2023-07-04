import maplibregl,{Map} from 'maplibre-gl';

export const createMap = (): Map => {
  const west: number = 105.84117; // Tọa độ tây
  const east: number = 105.84846; // Tọa độ đông
  const north: number = 21.00845; // Tọa độ bắc
  const south: number = 21.00174; // Tọa độ nam

  const bounds: maplibregl.LngLatBoundsLike = [
    [west, south],
    [east, north],
  ];

  const map = new maplibregl.Map({
    container: 'map',
    style: {
      "version": 8,
      "name": "Empty",
      "metadata": {
        "mapbox:autocomposite": true
      },
      "glyphs": "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=S1qTEATai9KydkenOF6W",
      "sources": {},
      "layers": [
        {
          "id": "background",
          "type": "background",
          "paint": {
          "background-color": "#deeed2"
          }
        }
      ]
    },   
    center: [105.84449524774622,21.004814640742946],
    zoom: 16,
    hash: 'map',
    bounds: bounds,
    //maxBounds: bounds,
  });

  return map;
};
