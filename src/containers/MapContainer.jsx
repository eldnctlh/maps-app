import React, { Component, Fragment } from "react";
import { Map } from '../components/Map';
import { MapTools } from '../components/MapTools';
import { MapFilters } from '../components/MapFilters';
import { connect } from 'react-redux'
import {
    addMarker,
    showMarkers,
    saveMarkers,
    deleteMarker
} from '../duck/actions/map'

class MapContainer extends Component {
    componentDidMount() {
        const { addMarker } = this.props;
        navigator.geolocation.getCurrentPosition( (pos) => addMarker({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            currentGeolocation: true,
        }));
    }

    onMapClick = e => this.props.addMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
    })


    deleteMarker = e => this.props.deleteMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
    })

    onPlacesChanged = (a, b,c) => {
        console.log(a);
        console.log(b);
        console.log(c);
    }

    render() {
        const { markers, saveMarkers, showMarkers } = this.props;
        return (
            <div>
                <div className={'buttons'}>
                    <MapTools
                        saveMarkers={saveMarkers}
                        showMarkers={showMarkers}
                    />
                    <MapFilters />
                </div>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQm-iPM-oZCaSdnJJXp9fWuhZviOGB0kA&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onPlacesChanged={this.onPlacesChanged}
                    onMapClick={this.onMapClick}
                    deleteMarker={this.deleteMarker}
                    markers={markers}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        markers: state.map.markers
    }
}

const mapDispatchToProps = dispatch => ({
    addMarker: data => dispatch(addMarker(data)),
    deleteMarker: data => dispatch(deleteMarker(data)),
    showMarkers: () => dispatch(showMarkers()),
    saveMarkers: () => dispatch(saveMarkers()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContainer)