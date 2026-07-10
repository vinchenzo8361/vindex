import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { hospitals } from "../data/hospitals.ts";


function MapView() {

  const mapContainer = useRef<HTMLDivElement | null>(null);


  useEffect(() => {

    if (!mapContainer.current) return;


    const map = new maplibregl.Map({

      container: mapContainer.current,

      style: {

        version: 8,

        sources: {

          osm: {

            type: "raster",

            tiles: [
              "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
            ],

            tileSize: 256,

          }

        },


        layers: [

          {

            id: "osm",

            type: "raster",

            source: "osm"

          }

        ]

      },


      center: [-79.7624, 43.7315],

      zoom: 11,

    });



    map.addControl(
      new maplibregl.NavigationControl(),
      "top-left"
    );



    hospitals.forEach((hospital) => {

      const markerElement = document.createElement("div");


      markerElement.style.width = "36px";

      markerElement.style.height = "36px";

      markerElement.style.borderRadius = "8px";


      markerElement.style.backgroundColor =
        hospital.id === "brampton-civic"
          ? "#C83A3A"
          : "#3E8BFF";


      markerElement.style.border =
        "2px solid white";


      markerElement.style.boxShadow =
        "0 0 10px rgba(0,0,0,0.5)";


      markerElement.innerHTML = "H";


      markerElement.style.color = "white";

      markerElement.style.fontSize = "22px";

      markerElement.style.fontWeight = "bold";


      markerElement.style.display = "flex";

      markerElement.style.alignItems = "center";

      markerElement.style.justifyContent = "center";


      markerElement.style.cursor = "pointer";



      const popup = new maplibregl.Popup({

        offset: 25

      })

      .setHTML(`
        <div style="
            color: #111827;
            font-family: Arial, sans-serif;
            line-height: 1.5;
        ">
            <strong style="
                font-size: 15px;
            ">
                ${hospital.name}
            </strong>
        <br/>
        <span>
            ${hospital.address}
        </span>
        <br/>
        <span>
            Emergency Department: Yes
        </span>
        </div>
    `);


      new maplibregl.Marker({

        element: markerElement

      })

      .setLngLat([

        hospital.longitude,

        hospital.latitude

      ])

      .setPopup(popup)

      .addTo(map);


    });


    return () => {

      map.remove();

    };


  }, []);



  return (

    <div

      ref={mapContainer}

      style={{

        width: "100%",

        height: "100%",

      }}

    />

  );

}


export default MapView;