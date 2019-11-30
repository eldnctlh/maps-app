import React, { useRef } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { defaultZoom } from "../const/const";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

export const Map = withScriptjs(withGoogleMap((props) => {

    const searchBox = useRef();
    const onChange = () => {
        console.log(searchBox.current.getPlaces());
    }
    return (
        <GoogleMap
            defaultZoom={defaultZoom}
            defaultCenter={props.markers.find(e => e.currentGeolocation)}
            onClick={props.onMapClick}
        >
            <SearchBox
                ref={searchBox}
                bounds={props.bounds}
                controlPosition={google.maps.ControlPosition.TOP_RIGHT}
                onPlacesChanged={onChange}
            >
                <input
                    type="text"
                    placeholder="Customized your placeholder"
                    style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `240px`,
                        height: `32px`,
                        marginTop: `27px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `14px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                    }}
                />
            </SearchBox>
            {
                props.markers.map(marker => (
                    <Marker
                        onClick={props.deleteMarker}
                        key={marker.lat + marker.lng}
                        position={marker}
                    />
                ))
            }
        </GoogleMap>
    )
}))

