import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polyline,
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
    [
      { lat: 18.5204, lng: 73.8567 },
      { lat: 19.076, lng: 72.8777 },
    ],
    [
      { lat: 18.7204, lng: 73.9567 },
      { lat: 19.094, lng: 74.748 },
      { lat: 17.68, lng: 74.018 },
    ],

    // { lat: 37.772, lng: -122.214 },
    // { lat: 21.291, lng: -157.821 },
    // { lat: -18.142, lng: 178.431 },
    // { lat: -27.467, lng: 153.027 },
  ];
  // const path = [
  //   { lat: 18.5204, lng: 73.8567 },
  //   { lat: 19.076, lng: 72.8777 },

  //   // { lat: 37.772, lng: -122.214 },
  //   // { lat: 21.291, lng: -157.821 },
  //   // { lat: -18.142, lng: 178.431 },
  //   // { lat: -27.467, lng: 153.027 },
  // ];

  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    // visible: true,
    visible: btnStatus,
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
        {path.map((item, index) => {
          return (
            <div key={index}>
              {" "}
              <Polyline onLoad={onLoad} path={item} options={options} />
            </div>
          );
        })}
        {/* <Polyline onLoad={onLoad} path={path} options={options} /> */}
        {/* {btnStatus ? (
          <Polyline onLoad={onLoad} path={path} options={options} />
        ) : (
          <></>
        )} */}
      </GoogleMap>
      <div id="floating-panel">
        <button className="btn" onClick={() => setBtnStatus(!btnStatus)}>
          {btnStatus ? "Hide path" : "Show path"}
        </button>
      </div>
    </>
  );
}
