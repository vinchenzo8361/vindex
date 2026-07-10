import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";


function MapView() {

  const mapContainer = useRef<HTMLDivElement | null>(null);


  useEffect(() => {

    if (!mapContainer.current) return;


    const map = new maplibregl.Map({

      container: mapContainer.current,

      style:
        "https://demotiles.maplibre.org/style.json",

      center: [-79.7624, 43.7315],

      zoom: 11,

    });


    map.addControl(
      new maplibregl.NavigationControl(),
      "top-left"
    );


    return () => {
      map.remove();
    };


  }, []);


  return (

    <div
      ref={mapContainer}
      style={{
        width:"100%",
        height:"100%",
      }}
    />

  );

}


export default MapView;