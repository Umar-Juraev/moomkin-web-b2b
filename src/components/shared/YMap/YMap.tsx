"use client";
import React, { FC, useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "@iminside/react-yandex-maps";
import { YMapsApi } from "@iminside/react-yandex-maps/typings/util/typing";
import SkeletonMap from "../SkeletonMap/SkeletonMap";

interface Props { location: any }
const apikey = "220d8f99-d207-4451-922d-ac3513b33755";
const YMap: FC<Props> = ({ location }) => {
  const [loading, setLoading] = useState(true);

  const defaultState = {
    center: [location.lat, location.lng],
    zoom: 14,
  };
  const handleLoad = (api:YMapsApi)=>{
    setLoading(false)
  }
  return (
    <div className="h-42.5 w-full rounded-[20px] overflow-hidden relative">
      {loading && <SkeletonMap/>}
        <YMaps query={{ apikey }}>
          <Map onLoad={handleLoad} defaultState={defaultState} className="w-full h-full">
            <Placemark
              geometry={[location.lat, location.lng]}
              options={{
                iconLayout: "default#image",
                iconImageHref: "/images/pin.png",
                iconImageSize: [64, 70],
                iconImageOffset: [-32, -64],
              }}
            />
          </Map>
        </YMaps>
    </div>
  );
};

export default YMap
