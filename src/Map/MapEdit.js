import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polyline,
  ScriptLoaded,
} from "@react-google-maps/api";
import "./map.css";

export default function MapEdit() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  // return <div>Hello</div>;
  return <Map />;
}

function Map() {
  const [btnStatus, setBtnStatus] = useState(false);
  const onLoad = (polyline) => {
    console.log("polyline: ", polyline);
  };

  const path = [
    { lat: 18.5204, lng: 73.8567 },
    { lat: 19.076, lng: 72.8777 },

    // { lat: 37.772, lng: -122.214 },
    // { lat: 21.291, lng: -157.821 },
    // { lat: -18.142, lng: 178.431 },
    // { lat: -27.467, lng: 153.027 },
  ];

  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: [
      { lat: 18.5204, lng: 73.8567 },
      { lat: 19.076, lng: 72.8777 },

      // { lat: 37.772, lng: -122.214 },
      // { lat: 21.291, lng: -157.821 },
      // { lat: -18.142, lng: 178.431 },
      // { lat: -27.467, lng: 153.027 },
    ],
    zIndex: 1,
  };

  const markerList = [
    {
      lat: 18.5204,
      lng: 73.8567,
    },
    {
      lat: 18.6204,
      lng: 73.7567,
    },
  ];
  return (
    <>
      <GoogleMap
        zoom={10}
        center={{ lat: 18.52, lng: 73.856 }}
        mapContainerClassName="container"
      >
        {" "}
        {markerList && btnStatus ? (
          markerList.map((item) => {
            return <Marker onLoad={onLoad} position={item} />;
          })
        ) : (
          <></>
        )}
        {btnStatus ? (
          <Polyline onLoad={onLoad} path={path} options={options} />
        ) : (
          <></>
        )}
      </GoogleMap>
      <div id="floating-panel">
        {/* <input id="remove-line" type="button" value="Remove line" />
        <input id="add-line" type="button" value="Restore line" /> */}
        <button className="btn" onClick={() => setBtnStatus(!btnStatus)}>
          {btnStatus ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
}

//   const mapContainerStyle = {
//     height: "400px",
//     width: "800px",
//   };

//   const center = {
//     lat: 0,
//     lng: -180,
//   };

//   const onLoad = (polyline) => {
//     console.log("polyline: ", polyline);
//   };

//   const path = [
//     { lat: 37.772, lng: -122.214 },
//     { lat: 21.291, lng: -157.821 },
//     { lat: -18.142, lng: 178.431 },
//     { lat: -27.467, lng: 153.027 },
//   ];

//   const options = {
//     strokeColor: "#FF0000",
//     strokeOpacity: 0.8,
//     strokeWeight: 2,
//     fillColor: "#FF0000",
//     fillOpacity: 0.35,
//     clickable: false,
//     draggable: false,
//     editable: false,
//     visible: true,
//     radius: 30000,
//     paths: [
//       { lat: 37.772, lng: -122.214 },
//       { lat: 21.291, lng: -157.821 },
//       { lat: -18.142, lng: 178.431 },
//       { lat: -27.467, lng: 153.027 },
//     ],
//     zIndex: 1,
//   };

//   // <ScriptLoaded>
//   <GoogleMap
//     id="marker-example"
//     mapContainerStyle={mapContainerStyle}
//     zoom={2}
//     center={center}
//   >
//     <Polyline onLoad={onLoad} path={path} options={options} />
//   </GoogleMap>;
//   // </ScriptLoaded>;
// }
