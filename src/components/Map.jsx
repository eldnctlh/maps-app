import React from 'react';
import styled from 'styled-components';
import { compose, withProps, withHandlers, withState } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { defaultZoom, googleMapUrl, mapFilters } from "../const/const";


const Filters = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

const FilterItem = styled.button`
    box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
    padding: 10px 20px;
    margin-left: 20px;
    background: #f0fefe;
`;

const MyMapComponent = compose(
    withProps(props => {
        return {
            googleMapURL: googleMapUrl,
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `400px` }} />,
            mapElement: <div style={{ height: `100%` }} />,
            markers: props.markers,
            updateMarkers: props.updateMarkers,
            onMapClick: props.onMapClick,
            deleteMarker: props.deleteMarker,
        }
    }),
    withScriptjs,
    withGoogleMap,
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            fetchPlaces: ({updateMarkers}) => (type) => {
                let places;
                const bounds = refs.map.getBounds();
                const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
                const request = {
                    bounds: bounds,
                    type: type
                };
                service.nearbySearch(request, (results, status) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        updateMarkers(results.map(e => {
                            return {
                                lat: e.geometry.location.lat(),
                                lng: e.geometry.location.lng(),
                            }
                        }));
                    }
                })
            }
        }
    }),
)((props) => {
    return (
        <GoogleMap
            ref={props.onMapMounted}
            defaultZoom={defaultZoom}
            defaultCenter={props.markers.find(e => e.currentGeolocation)}
            onClick={props.onMapClick}
        >
            <Filters>
                {
                    mapFilters.map(e => (
                        <FilterItem
                            key={e.title}
                            onClick={() => props.fetchPlaces(e.type)}
                        >
                            {e.title}
                        </FilterItem>
                    ))
                }
            </Filters>
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
})

export default class MapWrapper extends React.PureComponent {
    render() {
        return (
            <MyMapComponent
                {...this.props}
            />
        )
    }
}
