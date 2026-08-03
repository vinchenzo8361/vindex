import { useEffect, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import { setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { hospitals } from "../data/hospitals";
import { ambulance } from "../data/ambulance";


setWorkerUrl(
  "https://cdn.jsdelivr.net/npm/maplibre-gl@6.0.0/dist/maplibre-gl-worker.mjs"
);


function MapView() {


  const mapContainer = useRef<HTMLDivElement | null>(null);


  const [incidentMarker, setIncidentMarker] =
    useState<maplibregl.Marker | null>(null);



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
              "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
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




    // HOSPITAL MARKERS

    hospitals.forEach((hospital) => {


      const markerElement =
        document.createElement("div");



      markerElement.style.width = "36px";

      markerElement.style.height = "36px";

      markerElement.style.borderRadius = "8px";


      markerElement.style.backgroundColor =
        hospital.id === "brampton-civic"
          ? "#C83A3A"
          : "#3E8BFF";



      markerElement.style.border =
        "2px solid white";


      markerElement.innerHTML = "H";


      markerElement.style.color = "white";

      markerElement.style.fontWeight = "bold";

      markerElement.style.fontSize = "20px";


      markerElement.style.display = "flex";

      markerElement.style.alignItems = "center";

      markerElement.style.justifyContent = "center";




      const popup = new maplibregl.Popup({

        offset: 25

      })

      .setHTML(`

        <div style="
          color:#111827;
          font-family:Arial;
        ">

        <strong>
          ${hospital.name}
        </strong>

        <br/>

        ${hospital.address}

        <br/>

        Emergency Department: Yes

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






    // AMBULANCE MARKER


    const ambulanceElement =
      document.createElement("div");



    ambulanceElement.style.width = "42px";

    ambulanceElement.style.height = "30px";


    ambulanceElement.style.backgroundColor =
      "white";


    ambulanceElement.style.border =
      "2px solid #C83A3A";


    ambulanceElement.style.borderRadius =
      "6px";


    ambulanceElement.innerHTML =
      "🚑";



    ambulanceElement.style.fontSize =
      "24px";



    const ambulancePopup =
      new maplibregl.Popup({

        offset: 25

      })

      .setHTML(`

        <div style="
          color:#111827;
          font-family:Arial;
        ">

        <strong>
          Vindex Ambulance 01
        </strong>

        <br/>

        Status: Idle

        </div>

      `);




    new maplibregl.Marker({

      element: ambulanceElement

    })

    .setLngLat([

      ambulance.longitude,

      ambulance.latitude

    ])

    .setPopup(ambulancePopup)

    .addTo(map);







    // INCIDENT PLACEMENT


    map.on("click", (event) => {



      if (incidentMarker) {

        incidentMarker.remove();

      }



      const incidentElement =
        document.createElement("div");



      incidentElement.style.width = "32px";

      incidentElement.style.height = "32px";


      incidentElement.style.backgroundColor =
        "#C83A3A";


      incidentElement.style.border =
        "3px solid white";


      incidentElement.style.borderRadius =
        "50%";



      incidentElement.innerHTML = "!";



      incidentElement.style.color =
        "white";


      incidentElement.style.fontWeight =
        "bold";


      incidentElement.style.display =
        "flex";


      incidentElement.style.alignItems =
        "center";


      incidentElement.style.justifyContent =
        "center";




      const marker =
        new maplibregl.Marker({

          element: incidentElement

        })

        .setLngLat(event.lngLat)

        .setPopup(

          new maplibregl.Popup({

            offset: 25

          })

          .setText(
            "Emergency Incident"
          )

        )

        .addTo(map);



      setIncidentMarker(marker);



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