import maplibregl, { Map, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import data from "../hust/data.json";
import { showLocationDetail } from "./showinformation";

export function markerImage(map: maplibregl.Map) {
  const markerImageList: { marker: maplibregl.Marker; feature: any }[] = [];
  let currentMarker: maplibregl.Marker | null = null;

  for (const feature of data.features) {
    const el = document.createElement("div");
    el.className = "marker";

    const img = document.createElement("img");
    img.src = feature.properties.image_url_1;
    img.className = "marker-image";
    img.style.cursor = "pointer";
    img.style.width = feature.properties.iconSize[0] + "px";
    img.style.height = feature.properties.iconSize[1] + "px";

    el.appendChild(img);

    const marker = new maplibregl.Marker(el)
      .setLngLat(feature.geometry.coordinates as maplibregl.LngLatLike)
      .addTo(map);

    //Show popup name
    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false
      });
    img.addEventListener("mouseenter", () => {
      map.getCanvas().style.cursor = "pointer";
      const description = feature.properties.name;
      popup.setLngLat(feature.geometry.coordinates as maplibregl.LngLatLike).setHTML(description).addTo(map);
    });
    img.addEventListener("mouseleave", () => {
      map.getCanvas().style.cursor = "";
      popup.remove();
    });


    markerImageList.push({ marker, feature });
    img.addEventListener("click", createMarkerClickHandler);
    document.getElementById("shopping")?.addEventListener("change", function () {
        const shoppingCheckbox = this as HTMLInputElement;
        // if (shoppingCheckbox.checked) {
        //   map.setFilter("vin-name", ["==", ["get", "type"], "shopping"]);
        // } else {
        //   map.setFilter("vin-name", null);
        // }
        if (feature.properties.type === "shopping") {
          el.style.display = "block";
        } else if (feature.properties.type === "restaurant") {
          el.style.display = "none";
        } else if (feature.properties.type === "atraction") {
          el.style.display = "none";
        }
      });

    document.getElementById("restaurant")?.addEventListener("change", function () {
        const restaurantCheckbox = this as HTMLInputElement;
        // if (restaurantCheckbox.checked) {
        //   map.setFilter("vin-name", ["==", ["get", "type"], "restaurant"]);
        // } else {
        //   map.setFilter("vin-name", null);
        // }
        if (feature.properties.type === "shopping") {
          el.style.display = "none";
        } else if (feature.properties.type === "restaurant") {
          el.style.display = "block";
        } else if (feature.properties.type === "atraction") {
          el.style.display = "none";
        }
      });

    document.getElementById("atraction")?.addEventListener("change", function () {
        const atractionCheckbox = this as HTMLInputElement;
        // if (atractionCheckbox.checked) {
        //   map.setFilter("vin-name", ["==", ["get", "type"], "atraction"]);
        // } else {
        //   map.setFilter("vin-name", null);
        // }
        if (feature.properties.type === "atraction") {
          el.style.display = "block";
        } else if (feature.properties.type === "shopping") {
          el.style.display = "none";
        } else if (feature.properties.type === "restaurant") {
          el.style.display = "none";
        }
      });

    document.getElementById("all")?.addEventListener("change", function () {
      const allCheckbox = this as HTMLInputElement;
      if (allCheckbox.checked) {
        //map.setFilter("vin-name", null);
        el.style.display = "block";
      }
    });
  }
  const marker = new maplibregl.Marker({
    color: "blue",
    draggable: true,
    anchor: "top",
  })
  .setLngLat([105.84312136793108, 21.00652348079494])
  .addTo(map);
    
  function createMarkerClickHandler(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    const clickedMarker = markerImageList.find(item => item.marker.getElement().contains(imgElement));

    if (clickedMarker) {
      if (currentMarker) {
        const currentImgElement = currentMarker.getElement().querySelector("img");
        if (currentImgElement) {
          currentImgElement.style.display = "block";
        }
      }

      const clickedImgElement = clickedMarker.marker.getElement().querySelector("img");
      if (clickedImgElement) {
        clickedImgElement.style.display = "none";
      }

      currentMarker = clickedMarker.marker;

      showLocationDetail(clickedMarker.feature);
      const lngLat = clickedMarker.feature.geometry.coordinates;
      marker.setLngLat(lngLat);
      map.setCenter(lngLat);
      map.setZoom(18);

      const myElement = document.getElementById("search_left") as HTMLInputElement;
      const dataname = clickedMarker.feature.properties.name;
      if (dataname) {
        myElement.value = dataname;
      }

      const element = document.getElementById("search-input") as HTMLInputElement;
      const datasearch = clickedMarker.feature.properties.name;
      if (datasearch) {
        element.value = datasearch;
      }

      
      
    }
  }

  return marker;
}


export function zoom(map: Map){
  map.on("zoom", () => {
    for (const feature of data.features) {
      const marker = new maplibregl.Marker().setLngLat(feature.geometry.coordinates as maplibregl.LngLatLike);
      const el = marker.getElement();
      
      // Lấy độ zoom hiện tại của bản đồ
      const currentZoom = map.getZoom();
      
      // Lấy kích thước ban đầu của hình ảnh
      const width = 40;
      const height = 40;
  
      const imgElements = document.querySelectorAll<HTMLImageElement>(".marker-image");
      let newWidth: number, newHeight: number;
      
      // Tính toán kích thước mới dựa trên độ zoom hiện tại của bản đồ
      imgElements.forEach((imgElement) => {
        if (currentZoom <= 15) {
          newWidth = 0;
          newHeight = 0;
  
          imgElement.addEventListener("mouseover", function () {
            // Tăng kích thước của thẻ khi con trỏ chuột hover vào
            imgElement.style.width = "0px";
            imgElement.style.height = "0px";
          });
          imgElement.addEventListener("mouseout", function () {
            // Khôi phục kích thước ban đầu
            imgElement.style.width = "0px";
            imgElement.style.height = "0px";
          });
  
        } else if (currentZoom > 15 && currentZoom < 15.5) {
          newWidth = width * 0.1;
          newHeight = height * 0.1;
  
          imgElement.addEventListener("mouseover", function () {
            // Tăng kích thước của thẻ khi con trỏ chuột hover vào
            imgElement.style.width = "8px";
            imgElement.style.height = "8px";
          });
          imgElement.addEventListener("mouseout", function () {
            // Khôi phục kích thước ban đầu
            imgElement.style.width = "4px";
            imgElement.style.height = "4px";
          });
  
        } else if (currentZoom > 15.5 && currentZoom < 16.5) {
          newWidth = width * 0.5;
          newHeight = height * 0.5;
  
          imgElement.addEventListener("mouseover", function () {
            // Tăng kích thước của thẻ khi con trỏ chuột hover vào
            imgElement.style.width = "40px";
            imgElement.style.height = "40px";
          });
          imgElement.addEventListener("mouseout", function () {
            // Khôi phục kích thước ban đầu
            imgElement.style.width = "20px";
            imgElement.style.height = "20px";
          });
  
        } else if (currentZoom > 16.5 && currentZoom < 17.5) {
          newWidth = width;
          newHeight = height;
  
          imgElement.addEventListener("mouseover", function () {
            // Tăng kích thước của thẻ khi con trỏ chuột hover vào
            imgElement.style.width = "70px";
            imgElement.style.height = "70px";
          });
          imgElement.addEventListener("mouseout", function () {
            // Khôi phục kích thước ban đầu
            imgElement.style.width = "40px";
            imgElement.style.height = "40px";
          });
  
        } else if (currentZoom > 17.5 && currentZoom < 19) {
          newWidth = width * 1.6;
          newHeight = height * 1.6;
  
          imgElement.addEventListener("mouseover", function () {
            // Tăng kích thước của thẻ khi con trỏ chuột hover vào
            imgElement.style.width = "100px";
            imgElement.style.height = "100px";
          });
          imgElement.addEventListener("mouseout", function () {
            // Khôi phục kích thước ban đầu
            imgElement.style.width = "64px";
            imgElement.style.height = "64px";
          });
  
        }
        
        // Cập nhật kích thước của hình ảnh
        imgElement.style.width = `${newWidth}px`;
        imgElement.style.height = `${newHeight}px`;
      });
    }
  });
}